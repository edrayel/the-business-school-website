"use client";

import { Briefcase, BarChart3, Users2, Lightbulb, FlaskConical } from "lucide-react";
import { Container, AnimatedSection, Accordion } from "@/components/ui";

const curriculumItems = [
    {
        id: "management",
        icon: <Briefcase className="w-5 h-5" />,
        title: "Management Fundamentals",
        content: (
            <div className="space-y-3">
                <p>
                    Master the core disciplines that form the foundation of effective business leadership:
                    finance and accounting, marketing, operations, organizational behavior, and strategy.
                </p>
                <p className="text-primary-600 font-medium">
                    Not theory for theory&apos;s sake—but frameworks you&apos;ll use to make better decisions.
                </p>
            </div>
        ),
    },
    {
        id: "analytics",
        icon: <BarChart3 className="w-5 h-5" />,
        title: "Analytical Methods",
        content: (
            <div className="space-y-3">
                <p>
                    Develop the ability to work with data, conduct rigorous research, leverage AI tools,
                    and make evidence-based decisions that drive real results.
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    <li>Data analysis and visualization</li>
                    <li>Research methodology</li>
                    <li>AI-assisted decision making</li>
                    <li>Quantitative methods for business</li>
                </ul>
            </div>
        ),
    },
    {
        id: "leadership",
        icon: <Users2 className="w-5 h-5" />,
        title: "Leadership Capabilities",
        content: (
            <div className="space-y-3">
                <p>
                    Learn to lead teams, navigate complex dynamics, manage conflict, build
                    organizational culture, and make ethical decisions under pressure.
                </p>
                <p className="text-neutral-700">
                    These aren&apos;t soft skills—they&apos;re the hard skills that determine whether
                    organizations succeed or fail.
                </p>
            </div>
        ),
    },
    {
        id: "specialized",
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Specialized Knowledge for Impact",
        content: (
            <div className="space-y-3">
                <p>
                    Deep training in areas that matter for building sustainable ventures with purpose:
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    <li>Development economics</li>
                    <li>Bottom-of-the-pyramid business models</li>
                    <li>Social entrepreneurship</li>
                    <li>Innovation in resource-constrained environments</li>
                </ul>
            </div>
        ),
    },
    {
        id: "applied",
        icon: <FlaskConical className="w-5 h-5" />,
        title: "Applied Experience & Research",
        content: (
            <div className="space-y-3">
                <p>
                    Work on real ventures and real problems—not hypothetical cases. Our applied
                    learning includes:
                </p>
                <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    <li>Entrepreneurship lab with live projects</li>
                    <li>Venture competitions with real funding</li>
                    <li>Guest sessions with practitioners</li>
                    <li>Rigorous research addressing your unique challenges</li>
                </ul>
            </div>
        ),
    },
];

export function CurriculumHighlights() {
    return (
        <section className="section-padding bg-neutral-50">
            <Container variant="narrow">
                <AnimatedSection animation="fadeUp" className="text-center mb-12">
                    <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                        What You&apos;ll Actually Learn
                    </h2>
                    <p className="text-body-lg text-neutral-700">
                        A curriculum designed for application, not just accumulation.
                    </p>
                </AnimatedSection>

                <AnimatedSection animation="fadeUp" delay={0.2}>
                    <Accordion items={curriculumItems} />
                </AnimatedSection>
            </Container>
        </section>
    );
}
