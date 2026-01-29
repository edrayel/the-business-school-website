"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, Users } from "lucide-react";
import { Container, AnimatedSection } from "@/components/ui";

const beliefs = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        text: "Access to knowledge shouldn't depend on wealth",
    },
    {
        icon: <Heart className="w-5 h-5" />,
        text: "Quality and affordability aren't opposites",
    },
    {
        icon: <Users className="w-5 h-5" />,
        text: "Education should serve students, not the other way around",
    },
];

export function MissionStatement() {
    return (
        <section className="section-padding bg-neutral-50">
            <Container variant="narrow">
                <AnimatedSection animation="fadeUp" className="text-center">
                    <h2 className="text-heading-1 font-bold text-neutral-900 mb-8">
                        What Drives Us
                    </h2>

                    <p className="text-xl md:text-2xl text-neutral-700 mb-12 leading-relaxed">
                        We're focused on delivering exceptional business education to people who need it.
                    </p>

                    {/* Beliefs */}
                    <div className="mb-12">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                            We believe:
                        </h3>
                        <div className="space-y-4">
                            {beliefs.map((belief, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center justify-center gap-4 p-4 rounded-xl bg-white border border-neutral-200"
                                >
                                    <span className="p-2 rounded-lg bg-primary-100 text-primary-600">
                                        {belief.icon}
                                    </span>
                                    <span className="text-neutral-700 font-medium">
                                        {belief.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Closing statement */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 text-white"
                    >
                        <p className="text-lg md:text-xl leading-relaxed">
                            We've designed everything—our model, delivery, pricing—around these beliefs.
                        </p>
                    </motion.div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
