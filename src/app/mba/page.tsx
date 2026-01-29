"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Clock,
    DollarSign,
    Globe,
    Users,
    BookOpen,
    Target,
    Briefcase,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Calendar,
    Award,
} from "lucide-react";
import { Container, AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem, Button, MotionCard, Accordion } from "@/components/ui";

const programHighlights = [
    { icon: <Clock className="w-6 h-6" />, label: "Duration", value: "18-24 Months" },
    { icon: <DollarSign className="w-6 h-6" />, label: "Tuition", value: "Fraction of Traditional Cost" },
    { icon: <Globe className="w-6 h-6" />, label: "Delivery", value: "Hybrid (Online + In-Person)" },
    { icon: <Calendar className="w-6 h-6" />, label: "Start Dates", value: "Multiple Per Year" },
];

const curriculumAreas = [
    {
        id: "foundations",
        icon: <BookOpen className="w-5 h-5" />,
        title: "Management Fundamentals",
        content: (
            <ul className="space-y-2 text-neutral-600">
                <li>• Financial accounting and management accounting</li>
                <li>• Corporate finance and investment decisions</li>
                <li>• Operations management and process optimization</li>
                <li>• Marketing strategy and customer insights</li>
                <li>• Organizational behavior and HR management</li>
            </ul>
        ),
    },
    {
        id: "analytics",
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Analytical Methods",
        content: (
            <ul className="space-y-2 text-neutral-600">
                <li>• Data analysis and business intelligence</li>
                <li>• Statistical methods for business decisions</li>
                <li>• Research methodology</li>
                <li>• Strategic analysis frameworks</li>
            </ul>
        ),
    },
    {
        id: "leadership",
        icon: <Users className="w-5 h-5" />,
        title: "Leadership Capabilities",
        content: (
            <ul className="space-y-2 text-neutral-600">
                <li>• Strategic leadership and change management</li>
                <li>• Negotiation and conflict resolution</li>
                <li>• Cross-cultural management</li>
                <li>• Ethical leadership in complex environments</li>
            </ul>
        ),
    },
    {
        id: "specialized",
        icon: <Target className="w-5 h-5" />,
        title: "Specialized Knowledge",
        content: (
            <ul className="space-y-2 text-neutral-600">
                <li>• Social entrepreneurship and venture design</li>
                <li>• Impact investing and development finance</li>
                <li>• Industry-specific tracks (Agriculture, Fashion, Sports, etc.)</li>
                <li>• Technology for social impact</li>
            </ul>
        ),
    },
    {
        id: "applied",
        icon: <Briefcase className="w-5 h-5" />,
        title: "Applied Experience",
        content: (
            <ul className="space-y-2 text-neutral-600">
                <li>• Capstone project with real organizations</li>
                <li>• Think Tank research participation</li>
                <li>• Industry consulting projects</li>
                <li>• Venture development support</li>
            </ul>
        ),
    },
];

const admissionRequirements = [
    "Bachelor's degree from an accredited institution",
    "Minimum 2 years of professional experience (5+ preferred)",
    "Demonstrated leadership potential",
    "Clear articulation of goals and how this program serves them",
    "English proficiency (for non-native speakers)",
    "Two professional references",
];

const idealCandidates = [
    "Mid-career professionals seeking to pivot or advance",
    "Entrepreneurs building ventures in emerging markets",
    "Development sector professionals wanting business skills",
    "Social enterprise leaders looking to scale impact",
    "Anyone committed to using business for positive change",
];

export default function MBAPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-20 left-1/4 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"
                    />
                </div>

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeUp" className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
                            <GraduationCap className="w-4 h-4" />
                            Graduate Program
                        </div>
                        <h1 className="text-display-2 font-bold text-white mb-6">
                            MBA in Social Business & Entrepreneurship
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed mb-8">
                            A rigorous business education designed for people who want to create real impact—without
                            the crushing debt or career interruption of traditional programs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button as="link" href="/apply" variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                Apply Now
                            </Button>
                            <Button as="link" href="/contact" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white hover:text-neutral-900">
                                Request Information
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Program Highlights */}
            <section className="py-12 bg-white border-b border-neutral-100">
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {programHighlights.map((item, i) => (
                            <AnimatedDiv key={i} animation="fadeUp" delay={i * 0.1}>
                                <div className="text-center">
                                    <div className="inline-flex p-3 rounded-xl bg-primary-100 text-primary-600 mb-3">
                                        {item.icon}
                                    </div>
                                    <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                                    <p className="font-semibold text-neutral-900">{item.value}</p>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Program Overview */}
            <section className="section-padding bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="fadeUp">
                            <h2 className="text-heading-1 font-bold text-neutral-900 mb-6">
                                What Makes This MBA Different
                            </h2>
                            <div className="space-y-4 text-neutral-600">
                                <p>
                                    Most MBA programs were designed for a different era—when physical presence was
                                    necessary and business education meant corporate career tracks.
                                </p>
                                <p>
                                    We've built something different. An MBA that recognizes you have a life, a career,
                                    possibly a venture already in motion. That values application over theory. That
                                    costs what education actually costs to deliver, not what the market will bear.
                                </p>
                                <p className="font-semibold text-primary-700">
                                    This is rigorous business education made accessible—for people who will use it
                                    to build things that matter.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
                                <h3 className="font-semibold text-neutral-900 mb-4">The Approach</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Platform-first delivery eliminates campus overhead",
                                        "Hybrid model: online flexibility with in-person impact",
                                        "Work while you learn—apply concepts immediately",
                                        "Industry cohorts for relevant, practical learning",
                                        "Faculty: PhD academics + practitioners who've done it",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-700">
                                            <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Curriculum */}
            <section className="section-padding bg-neutral-50">
                <Container variant="narrow">
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Curriculum
                        </h2>
                        <p className="text-body-lg text-neutral-600">
                            Comprehensive business education with practical application at every stage.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeUp" delay={0.2}>
                        <Accordion items={curriculumAreas} />
                    </AnimatedSection>
                </Container>
            </section>

            {/* Who Should Apply */}
            <section className="section-padding bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Who Should Apply
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <AnimatedDiv animation="fadeUp" delay={0.1}>
                            <div className="h-full p-6 rounded-2xl bg-primary-50 border border-primary-200">
                                <h3 className="font-semibold text-primary-900 mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    Ideal Candidates
                                </h3>
                                <ul className="space-y-3">
                                    {idealCandidates.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-primary-800 text-sm">
                                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <div className="h-full p-6 rounded-2xl bg-neutral-100 border border-neutral-200">
                                <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5" />
                                    Requirements
                                </h3>
                                <ul className="space-y-3">
                                    {admissionRequirements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-700 text-sm">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
                <Container variant="narrow">
                    <AnimatedSection animation="fadeUp" className="text-center">
                        <h2 className="text-heading-1 font-bold mb-6">
                            Ready to Transform Your Career?
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Join a community of leaders using business skills to create real impact.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button as="link" href="/apply" variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                Start Your Application
                            </Button>
                            <Button as="link" href="/model" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white hover:text-neutral-900">
                                Learn About Our Model
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    );
}
