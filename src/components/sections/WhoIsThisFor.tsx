"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Container, AnimatedSection } from "@/components/ui";

const shouldBeHere = [
    "You need an MBA to advance your career, launch a venture, or pivot into new work.",
    "You want to solve unique problems and go beyond a generic educational journey.",
    "You're building something real and need the tools to do it right.",
    "You want your education to serve your goals, fit your life, and be fun.",
];

const willThrive = [
    "You're self-directed and can manage flexible learning.",
    "You have a clear purpose for pursuing this degree.",
    "You're ready to do rigorous work.",
    "You want to connect theory to practice constantly.",
];

export function WhoIsThisFor() {
    return (
        <section className="section-padding bg-neutral-50 overflow-hidden">
            <Container>
                <AnimatedSection animation="fadeUp" className="text-center mb-16">
                    <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                        Who This Is For
                    </h2>
                    <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
                        We're building this for people who want results, not just a document
                        to show they studied.
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* You Should Be Here If */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 lg:p-10 text-white h-full">
                            {/* Decorative element */}
                            <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/10 blur-2xl" />

                            <div className="relative">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                                    <Check className="w-4 h-4" />
                                    Perfect Fit
                                </div>

                                <h3 className="text-heading-2 font-bold mb-8">
                                    You Should Be Here If:
                                </h3>

                                <ul className="space-y-5">
                                    {shouldBeHere.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                            className="flex items-start gap-4"
                                        >
                                            <span className="flex-shrink-0 mt-1 p-1 rounded-full bg-white/20">
                                                <Check className="w-4 h-4" />
                                            </span>
                                            <span className="text-white/90 leading-relaxed">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* You'll Thrive Here If */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-3xl bg-white border border-neutral-200 p-8 lg:p-10 h-full shadow-soft">
                            {/* Decorative element */}
                            <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-accent-500/10 blur-2xl" />

                            <div className="relative">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    Thrive Zone
                                </div>

                                <h3 className="text-heading-2 font-bold text-neutral-900 mb-8">
                                    You'll Thrive Here If:
                                </h3>

                                <ul className="space-y-5">
                                    {willThrive.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                            className="flex items-start gap-4"
                                        >
                                            <span className="flex-shrink-0 mt-1 p-1 rounded-full bg-primary-100 text-primary-600">
                                                <Check className="w-4 h-4" />
                                            </span>
                                            <span className="text-neutral-700 leading-relaxed">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <blockquote className="text-lg text-neutral-600 italic max-w-2xl mx-auto">
                        &quot;We offer credentials for your achievements—but more importantly,
                        we focus on delivering real results.&quot;
                    </blockquote>
                </motion.div>
            </Container>
        </section>
    );
}
