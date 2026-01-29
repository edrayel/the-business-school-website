"use client";

import { User, Briefcase, Rocket } from "lucide-react";
import { Container, AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui";

const benefits = [
    {
        icon: <User className="w-7 h-7" />,
        title: "For You Personally",
        description: "Get an MBA without financial devastation or pausing your career. Apply learning immediately and build a network of problem-solvers.",
        color: "primary",
    },
    {
        icon: <Briefcase className="w-7 h-7" />,
        title: "For Your Career",
        description: "Acquire competence in analyzing complex situations, designing solutions, and leading implementation with credibility.",
        color: "accent",
    },
    {
        icon: <Rocket className="w-7 h-7" />,
        title: "For Your Ventures",
        description: "Gain the tools to read financial statements, design sustainable business models, and make fewer expensive mistakes.",
        color: "primary",
    },
];

const colorStyles = {
    primary: {
        iconBg: "bg-primary-100",
        iconText: "text-primary-600",
        border: "border-primary-200",
        hover: "hover:border-primary-400",
    },
    accent: {
        iconBg: "bg-accent-100",
        iconText: "text-accent-600",
        border: "border-accent-200",
        hover: "hover:border-accent-400",
    },
};

export function WhyThisWorks() {
    return (
        <section className="section-padding bg-white">
            <Container>
                <AnimatedSection animation="fadeUp" className="text-center mb-16">
                    <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                        Why This Works
                    </h2>
                    <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
                        Value that compounds across every aspect of your life and work.
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
                    {benefits.map((benefit, index) => {
                        const colors = colorStyles[benefit.color as keyof typeof colorStyles];
                        return (
                            <StaggerItem key={index}>
                                <div
                                    className={`h-full p-8 rounded-2xl bg-neutral-50 border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-soft`}
                                >
                                    <div
                                        className={`inline-flex p-4 rounded-2xl ${colors.iconBg} ${colors.iconText} mb-6`}
                                    >
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-4">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>

                {/* Bottom highlight */}
                <AnimatedSection animation="fadeUp" delay={0.4} className="mt-12">
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100 text-center">
                        <p className="text-lg text-neutral-700">
                            <strong className="text-primary-700">For Accessibility:</strong>{" "}
                            Affordable pricing expands access to quality education, proving that
                            <span className="text-accent-600 font-semibold"> talent and determination drive success</span>.
                        </p>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
