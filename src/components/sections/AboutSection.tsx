"use client";

import { GraduationCap, BookOpen, Users, Clock, Building, MapPin, Cog } from "lucide-react";
import { Container, AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem, IconCard } from "@/components/ui";

const focusItems = [
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Faculty with PhDs",
        description: "Real-world experience and knowledge of how to teach.",
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Rigorous Curriculum",
        description: "Meeting international standards for business education.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Resources & Networks",
        description: "Support systems to help you succeed in your goals.",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Flexible Delivery",
        description: "Education that fits your life, not the other way around.",
    },
];

const notSpendItems = [
    { icon: <Building className="w-5 h-5" />, text: "Expensive physical facilities" },
    { icon: <MapPin className="w-5 h-5" />, text: "Premium real estate" },
    { icon: <Cog className="w-5 h-5" />, text: "Infrastructure that doesn't serve education" },
];

export function AboutSection() {
    return (
        <section id="about" className="section-padding bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column - Main Text */}
                    <div>
                        <AnimatedSection animation="fadeUp" className="space-y-6">
                            <h2 className="text-heading-1 font-bold text-neutral-900">
                                Let&apos;s Be Direct
                            </h2>
                            <p className="text-body-lg text-neutral-700 leading-relaxed">
                                Most people can&apos;t afford an MBA that serves their ambition for growth,
                                that least disrupts their lives and at costs they can afford. Not because
                                they&apos;re not smart enough or capable enough, but because the{" "}
                                <span className="text-primary-600 font-semibold">
                                    quality-price envelope has largely gone out of sync
                                </span>.
                            </p>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200">
                                <p className="text-body text-primary-800 font-medium">
                                    <strong className="text-primary-900">THE Business School exists to change that equation.</strong>{" "}
                                    We deliver rigorous curriculum with qualified faculty, comprehensive
                                    resources, and meaningful credentials—at a fraction of what you&apos;d expect to pay.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* What we don't spend on */}
                        <AnimatedDiv animation="fadeUp" delay={0.2} className="mt-10">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                                What we don&apos;t spend on:
                            </h3>
                            <ul className="space-y-3">
                                {notSpendItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-neutral-700"
                                    >
                                        <span className="p-2 rounded-lg bg-neutral-100 text-neutral-500">
                                            {item.icon}
                                        </span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </AnimatedDiv>

                        {/* Result */}
                        <AnimatedDiv animation="fadeUp" delay={0.3} className="mt-8">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100/50 border border-accent-200">
                                <p className="text-body text-accent-900">
                                    <strong>The result?</strong> An MBA program that makes financial sense.
                                    Study online and in public spaces like libraries, cafés, and community
                                    centers. Maintain your income and stay connected to your work and community.
                                    <span className="font-semibold"> This isn&apos;t a compromise; it&apos;s a smarter design.</span>
                                </p>
                            </div>
                        </AnimatedDiv>
                    </div>

                    {/* Right Column - Feature Cards */}
                    <div>
                        <AnimatedDiv animation="fadeUp" delay={0.1}>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                                What We Focus On
                            </h3>
                        </AnimatedDiv>
                        <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                            {focusItems.map((item, index) => (
                                <StaggerItem key={index}>
                                    <IconCard
                                        icon={item.icon}
                                        title={item.title}
                                        description={item.description}
                                        delay={index * 0.1}
                                    />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </Container>
        </section>
    );
}
