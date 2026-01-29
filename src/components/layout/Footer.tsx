"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const footerLinks = {
    programs: [
        { href: "/mba", label: "MBA Program" },
        { href: "/model", label: "Our Model" },
        { href: "/faculty", label: "Faculty" },
        { href: "/think-tank", label: "Think Tank" },
    ],
    resources: [
        { href: "/curriculum", label: "Curriculum" },
        { href: "/research", label: "Research" },
        { href: "/events", label: "Events" },
        { href: "/blog", label: "Blog" },
    ],
    connect: [
        { href: "/apply", label: "Apply Now" },
        { href: "/contact", label: "Contact Us" },
        { href: "/admissions", label: "Admissions" },
        { href: "/faq", label: "FAQ" },
    ],
};

const socialLinks = [
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "mailto:hello@thebusinessschool.edu", icon: Mail, label: "Email" },
];

export function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <footer className="bg-gradient-dark text-white">
                {/* Main Footer */}
                <div className="container-custom section-padding-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-2xl font-bold"
                            >
                                <span className="text-3xl font-black tracking-tight text-primary-400">
                                    THE
                                </span>
                                <span className="font-medium text-white">Business School</span>
                            </Link>

                            <p className="mt-4 text-neutral-400 max-w-md">
                                Transformational. Heartsome. Entrepreneurial.
                                <br />
                                Education that works for you.
                            </p>

                            {/* Newsletter */}
                            <div className="mt-8">
                                <h4 className="text-sm font-semibold text-white mb-3">
                                    Subscribe to our newsletter
                                </h4>
                                <form className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-lg transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-full bg-white/10 text-neutral-400 hover:bg-primary-500 hover:text-white transition-all"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">Programs</h4>
                            <ul className="space-y-3">
                                {footerLinks.programs.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
                            <ul className="space-y-3">
                                {footerLinks.connect.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="container-custom py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-neutral-500 text-sm">
                                © {new Date().getFullYear()} THE Business School. All rights
                                reserved.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <Link
                                    href="/privacy"
                                    className="text-neutral-500 hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/terms"
                                    className="text-neutral-500 hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: showBackToTop ? 1 : 0,
                    scale: showBackToTop ? 1 : 0.8,
                    pointerEvents: showBackToTop ? "auto" : "none",
                }}
                transition={{ duration: 0.2 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-40 p-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-large transition-colors"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>
        </>
    );
}
