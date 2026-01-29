"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export function HeroSection() {
    const scrollToNext = () => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-[calc(100vh-5.5rem)] flex items-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-3xl"
                />

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 py-16 lg:py-24">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                        MBA in Social Business & Entrepreneurship
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-display-1 font-bold text-white mb-6 text-balance"
                    >
                        Transform the World{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500">
                            on Your Terms
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed"
                    >
                        Business education that meets your needs at a price that actually
                        makes sense.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            as="link"
                            href="/apply"
                            variant="accent"
                            size="lg"
                            icon={<ArrowRight className="w-5 h-5" />}
                        >
                            Apply Now
                        </Button>
                        <Button
                            onClick={scrollToNext}
                            variant="ghost"
                            size="lg"
                            className="text-white hover:bg-white/10 border border-white/30"
                            icon={<ArrowDown className="w-5 h-5" />}
                        >
                            Learn More
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 max-w-lg"
                    >
                        {[
                            { value: "100%", label: "Online Flexible" },
                            { value: "PhD", label: "Faculty Led" },
                            { value: "1/3", label: "The Cost" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center sm:text-left">
                                <div className="text-2xl md:text-3xl font-bold text-white">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/60">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
                aria-label="Scroll to next section"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6" />
                </motion.div>
            </motion.button>
        </section>
    );
}
