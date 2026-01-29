"use client";

import { ArrowRight, Lightbulb, Users, FileText, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { Container, AnimatedSection, Button } from "@/components/ui";

const features = [
    { icon: <FileText className="w-5 h-5" />, text: "Conduct research that matters" },
    { icon: <Handshake className="w-5 h-5" />, text: "Collaborate on development problems" },
    { icon: <Users className="w-5 h-5" />, text: "Participate in industry working groups" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Test ideas, build partnerships" },
];

export function ThinkTankTeaser() {
    return (
        <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
                />
            </div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <AnimatedSection animation="fadeUp">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
                            <Lightbulb className="w-4 h-4" />
                            Beyond the Classroom
                        </div>

                        <h2 className="text-heading-1 font-bold text-white mb-6">
                            THE Think Tank
                        </h2>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Our collaborative research and innovation platform where students, alumni,
                            faculty, and practitioners work together on real challenges.
                        </p>

                        <Button
                            as="link"
                            href="/think-tank"
                            variant="accent"
                            size="lg"
                            icon={<ArrowRight className="w-5 h-5" />}
                        >
                            Explore Think Tank
                        </Button>
                    </AnimatedSection>

                    {/* Right - Feature List */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-xl bg-white/20 text-white">
                                        {feature.icon}
                                    </div>
                                    <span className="text-white/90 leading-relaxed">
                                        {feature.text}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
