"use client";

import { ArrowRight, Target, Compass, MonitorPlay, Factory } from "lucide-react";
import { motion } from "framer-motion";
import { Container, AnimatedSection, Button } from "@/components/ui";

const features = [
    {
        icon: <Target className="w-6 h-6" />,
        label: "The Approach",
        description: "Master the full toolkit—finance, operations, strategy, and marketing—alongside specialized knowledge in poverty economics and ethical leadership.",
    },
    {
        icon: <MonitorPlay className="w-6 h-6" />,
        label: "The Delivery",
        description: "Hybrid learning featuring an integrated online platform, live video sessions, and periodic in-person gatherings in public spaces.",
    },
    {
        icon: <Factory className="w-6 h-6" />,
        label: "Industry Focus",
        description: "Each cohort focuses on a specific sector (agriculture, technology, fashion), ensuring cases and projects mirror your actual work.",
    },
];

export function MBAOverview() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column */}
                    <div>
                        <AnimatedSection animation="fadeUp">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                                <Compass className="w-4 h-4" />
                                Capstone Programme
                            </div>

                            <h2 className="text-heading-1 font-bold text-neutral-900 mb-6">
                                MBA in Social Business{" "}
                                <span className="text-primary-600">& Entrepreneurship</span>
                            </h2>

                            <p className="text-body-lg text-neutral-600 mb-8 leading-relaxed">
                                A focused MBA designed for people solving real problems—building social
                                enterprises, non-profits, or innovating within existing organizations
                                and government.
                            </p>

                            <Button
                                as="link"
                                href="/mba"
                                variant="primary"
                                size="lg"
                                icon={<ArrowRight className="w-5 h-5" />}
                            >
                                Explore the Curriculum
                            </Button>
                        </AnimatedSection>
                    </div>

                    {/* Right Column - Feature Cards */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="group relative"
                            >
                                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-white shadow-soft text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                                {feature.label}
                                            </h3>
                                            <p className="text-neutral-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
