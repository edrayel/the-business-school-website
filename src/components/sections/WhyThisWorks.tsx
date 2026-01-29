"use client";

import { User, Briefcase, Rocket, Globe } from "lucide-react";
import { Container, AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui";

const benefits = [
    {
        icon: <User className="w-7 h-7" />,
        title: "For You Personally",
        description: "Get an MBA without financial devastation or putting your life on hold. Apply what you're learning immediately to your work. Build a network of people solving similar problems in different contexts.",
        highlight: "You're treated as a professional who can manage your own time and learning.",
        color: "primary",
    },
    {
        icon: <Briefcase className="w-7 h-7" />,
        title: "For Your Career",
        description: "Acquire credentials that matter. More importantly, develop actual competence—the ability to analyze complex situations, design solutions, lead implementation, and conduct research that generates new insights.",
        highlight: "You'll be able to deliver results that matter.",
        color: "accent",
    },
    {
        icon: <Rocket className="w-7 h-7" />,
        title: "For What You're Building",
        description: "Whether it's a venture, an organization, or a community initiative—you'll have the strategic frameworks and operational tools to do it sustainably.",
        highlight: "Read financial statements, design business models, validate markets, manage people, raise capital, and measure impact.",
        color: "primary",
    },
    {
        icon: <Globe className="w-7 h-7" />,
        title: "For Accessibility",
        description: "Every person we educate at a price they can afford expands who gets access to quality business education. Every successful graduate demonstrates that talent and determination drive success.",
        highlight: "This model scales. As we grow, education becomes more accessible.",
        color: "accent",
    },
];

const colorStyles = {
    primary: {
        iconBg: "bg-primary-100",
        iconText: "text-primary-600",
        border: "border-primary-200",
        hover: "hover:border-primary-400",
        highlight: "text-primary-600",
    },
    accent: {
        iconBg: "bg-accent-100",
        iconText: "text-accent-600",
        border: "border-accent-200",
        hover: "hover:border-accent-400",
        highlight: "text-accent-600",
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
                    <p className="text-body-lg text-neutral-700 max-w-2xl mx-auto">
                        Value that compounds across every aspect of your life, your career, and the communities you serve.
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
                    {benefits.map((benefit, index) => {
                        const colors = colorStyles[benefit.color as keyof typeof colorStyles];
                        return (
                            <StaggerItem key={index}>
                                <div
                                    className={`h-full p-6 rounded-2xl bg-neutral-50 border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-soft flex flex-col`}
                                >
                                    <div
                                        className={`inline-flex p-3 rounded-xl ${colors.iconBg} ${colors.iconText} mb-5 self-start`}
                                    >
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-neutral-700 leading-relaxed text-sm mb-4 flex-grow">
                                        {benefit.description}
                                    </p>
                                    <p className={`text-sm font-medium ${colors.highlight} leading-relaxed`}>
                                        {benefit.highlight}
                                    </p>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </Container>
        </section>
    );
}
