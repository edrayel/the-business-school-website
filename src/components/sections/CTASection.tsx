"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Container, AnimatedSection, Button } from "@/components/ui";

export function CTASection() {
    return (
        <section className="section-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl translate-y-1/2"
                />
            </div>

            <Container className="relative z-10">
                <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto">
                    <h2 className="text-heading-1 font-bold text-white mb-6">
                        Ready to Start?
                    </h2>

                    <p className="text-xl text-white/80 mb-10 leading-relaxed">
                        Stop letting cost barriers delay your goals. The knowledge, faculty, and
                        technology exist. The only question is whether you're ready to do the work.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                            as="link"
                            href="/contact"
                            variant="secondary"
                            size="lg"
                            className="border-white/30 text-white hover:bg-white hover:text-neutral-900"
                            icon={<Mail className="w-5 h-5" />}
                            iconPosition="left"
                        >
                            Request Information
                        </Button>
                        <Button
                            as="link"
                            href="/admissions"
                            variant="ghost"
                            size="lg"
                            className="text-white/80 hover:text-white hover:bg-white/10"
                            icon={<Phone className="w-5 h-5" />}
                            iconPosition="left"
                        >
                            Speak with Admissions
                        </Button>
                    </div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/60 text-sm"
                    >
                        THE Business School: Learn it. Research it. Use it. Build it.
                    </motion.p>
                </AnimatedSection>
            </Container>
        </section>
    );
}
