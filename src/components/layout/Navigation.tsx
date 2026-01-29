"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
    { href: "/model", label: "Our Model" },
    { href: "/faculty", label: "Faculty" },
    { href: "/think-tank", label: "Think Tank" },
    { href: "/mba", label: "MBA Program" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/90 backdrop-blur-lg shadow-soft"
                        : "bg-transparent"
                    }`}
            >
                <nav className="container-custom">
                    <div className="flex h-18 items-center justify-between lg:h-22">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="relative z-10 flex items-center gap-2 text-xl font-bold text-primary-700 transition-colors hover:text-primary-600"
                        >
                            <span className="text-3xl font-black tracking-tight">THE</span>
                            <span className="hidden sm:inline text-neutral-700 font-medium">
                                Business School
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative py-2 text-sm font-medium transition-colors ${pathname === link.href
                                            ? "text-primary-600"
                                            : "text-neutral-600 hover:text-primary-600"
                                        }`}
                                >
                                    {link.label}
                                    {pathname === link.href && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                href="/apply"
                                className="btn-primary btn-sm"
                            >
                                Apply Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative z-10 lg:hidden p-2 -mr-2 text-neutral-700 hover:text-primary-600 transition-colors"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-neutral-900/50 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-large lg:hidden"
                        >
                            <div className="flex flex-col h-full pt-24 pb-8 px-6">
                                <nav className="flex-1">
                                    <ul className="space-y-1">
                                        {navLinks.map((link, index) => (
                                            <motion.li
                                                key={link.href}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={`flex items-center justify-between py-4 text-lg font-medium transition-colors ${pathname === link.href
                                                            ? "text-primary-600"
                                                            : "text-neutral-700 hover:text-primary-600"
                                                        }`}
                                                >
                                                    {link.label}
                                                    <ChevronRight className="w-5 h-5 text-neutral-400" />
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                <div className="space-y-3 pt-6 border-t border-neutral-200">
                                    <Link
                                        href="/apply"
                                        className="btn-primary w-full"
                                    >
                                        Apply Now
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="btn-secondary w-full"
                                    >
                                        Request Information
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer for fixed header */}
            <div className="h-18 lg:h-22" />
        </>
    );
}
