"use client";

import { motion } from "framer-motion";
import {
    Monitor,
    MapPin,
    GraduationCap,
    BookOpen,
    FlaskConical,
    Users,
    TrendingUp,
    Rocket,
    Globe,
    DollarSign,
    Clock,
    Target,
    Network,
    ArrowRight,
} from "lucide-react";
import { Container, AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem, Button, MotionCard } from "@/components/ui";

const platformFeatures = [
    "Complete learning management system",
    "Video conferencing for live sessions",
    "Collaborative workspaces for team projects",
    "Resource libraries with cases, readings, tools",
    "Academic administration and progress tracking",
    "Career services and professional development",
    "Alumni networking",
];

const publicSpaces = [
    { icon: <MapPin className="w-5 h-5" />, text: "Public libraries for focused work" },
    { icon: <Users className="w-5 h-5" />, text: "Community centers for workshops" },
    { icon: <Globe className="w-5 h-5" />, text: "Cafés and co-working spaces for team meetings" },
    { icon: <Monitor className="w-5 h-5" />, text: "Event venues for guest lectures" },
];

const facultyTypes = [
    { title: "Core Faculty", desc: "PhDs designing curriculum and maintaining quality" },
    { title: "Industry Practitioners", desc: "Sector-specific expertise from the field" },
    { title: "Project Mentors", desc: "Guiding applied learning experiences" },
    { title: "Global Talent", desc: "Accessed via video conferencing worldwide" },
];

const whoNeeds = [
    "Professionals who can't afford six-figure debt",
    "People with family/work responsibilities requiring flexible study",
    "Entrepreneurs building ventures in non-traditional sectors",
    "Leaders in developing regions where local options are limited",
    "Anyone who values knowledge over brand names",
];

const whatWeProvide = [
    "High-quality curriculum at accessible pricing",
    "Flexible delivery accommodating real lives",
    "Industry-relevant content for overlooked sectors",
    "Learning focused on application, not just theory",
    "Research support for your specific questions",
    "Community of people solving similar challenges",
];

const studentValue = [
    { icon: <DollarSign className="w-6 h-6" />, title: "Financial Value", desc: "MBA for a fraction of typical cost. No crushing debt means faster ROI and more freedom." },
    { icon: <Clock className="w-6 h-6" />, title: "Time Value", desc: "Don't pause your career. Earn income, build experience while getting educated." },
    { icon: <Target className="w-6 h-6" />, title: "Applied Value", desc: "What you learn gets used immediately. Projects can be real ventures." },
    { icon: <Network className="w-6 h-6" />, title: "Network Value", desc: "Classmates are practitioners, entrepreneurs, builders. Relationships become partnerships." },
];

const workValue = [
    "Strategic capability—analyze competitive environments, position offerings, allocate resources",
    "Financial literacy—read balance sheets, build models, evaluate investments, manage cash flow",
    "Operational competence—design efficient processes, manage supply chains, scale operations",
    "Leadership skills—build teams, manage performance, navigate conflict, create culture",
    "Market understanding—validate ideas, understand customer needs, develop positioning",
    "Credibility—an MBA signals competence to partners, investors, employers, and stakeholders",
];

const communityValue = [
    { title: "Economic Opportunity", desc: "Educated entrepreneurs create businesses. Businesses create jobs. Jobs create income and opportunity." },
    { title: "Better Solutions", desc: "More diverse perspectives inform how businesses are built and problems are solved." },
    { title: "New Knowledge", desc: "Research addresses questions specific to underserved markets, generating solutions that don't exist elsewhere." },
    { title: "Knowledge Diffusion", desc: "What you learn doesn't stay with you. You teach others, mentor emerging leaders, strengthen your ecosystem." },
];

const sustainabilityFactors = [
    { title: "Aligned Incentives", desc: "Our success depends on your success. If graduates thrive, more students enroll." },
    { title: "Market Positioning", desc: "Serving growing, underserved markets rather than competing in saturated ones." },
    { title: "Operational Efficiency", desc: "Low overhead and technology leverage create healthy margins at accessible prices." },
    { title: "Quality Focus", desc: "We maintain standards because reputation is everything." },
    { title: "Community Effects", desc: "As alumni networks grow, value increases for everyone." },
    { title: "Adaptability", desc: "Our model responds to changing needs without massive capital requirements." },
];

export default function ModelPage() {
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
                </div>

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeUp" className="max-w-3xl">
                        <h1 className="text-display-2 font-bold text-white mb-6">
                            How THE Business School Works
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            We've built a business school around a simple idea: eliminate every cost
                            that doesn't directly improve your learning.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Intro */}
            <section className="section-padding-sm bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center">
                        <p className="text-body-lg text-neutral-700 leading-relaxed">
                            Most of what makes education expensive has nothing to do with education.
                            It's real estate, buildings that sit empty, administrative overhead, location premiums.
                        </p>
                        <p className="text-xl text-primary-600 font-semibold mt-6">
                            We don't have those costs. So you don't pay for them.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Platform-First Infrastructure */}
            <section className="section-padding bg-neutral-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="fadeUp">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                                <Monitor className="w-4 h-4" />
                                Digital First
                            </div>
                            <h2 className="text-heading-1 font-bold text-neutral-900 mb-6">
                                Platform-First Infrastructure
                            </h2>
                            <p className="text-body-lg text-neutral-600 mb-6">
                                Our primary educational infrastructure is digital—an integrated platform
                                handling everything. Accessible 24/7 from anywhere.
                            </p>
                            <p className="text-neutral-600">
                                The investment we make in technology would traditionally go toward buildings.
                                Buildings serve dozens. <span className="text-primary-600 font-semibold">Our platform serves thousands and gets better with use.</span>
                            </p>
                        </AnimatedSection>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <div className="p-6 rounded-2xl bg-white shadow-soft border border-neutral-200">
                                <ul className="space-y-3">
                                    {platformFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-neutral-700">
                                            <span className="w-2 h-2 rounded-full bg-primary-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Hybrid Delivery */}
            <section className="section-padding bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-6">
                            <MapPin className="w-4 h-4" />
                            Flexible Spaces
                        </div>
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Hybrid Delivery Using Public Spaces
                        </h2>
                        <p className="text-body-lg text-neutral-600">
                            When face-to-face interaction creates value, we use spaces that already exist.
                            No mortgages. No maintenance. No utility bills for empty rooms.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
                        {publicSpaces.map((space, i) => (
                            <StaggerItem key={i}>
                                <MotionCard className="h-full" delay={i * 0.1}>
                                    <div className="flex flex-col items-center text-center gap-4">
                                        <div className="p-3 rounded-xl bg-accent-100 text-accent-600">
                                            {space.icon}
                                        </div>
                                        <span className="text-neutral-700">{space.text}</span>
                                    </div>
                                </MotionCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* Expert Faculty */}
            <section className="section-padding bg-neutral-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="fadeUp">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                                <GraduationCap className="w-4 h-4" />
                                Excellence
                            </div>
                            <h2 className="text-heading-1 font-bold text-neutral-900 mb-6">
                                Expert Faculty, Flexible Structure
                            </h2>
                            <p className="text-body-lg text-neutral-600">
                                We employ faculty who can teach at the highest level—matching the right
                                expertise to each learning need without carrying fixed costs of large
                                tenured faculty bodies.
                            </p>
                        </AnimatedSection>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {facultyTypes.map((type, i) => (
                                <AnimatedDiv key={i} animation="fadeUp" delay={i * 0.1}>
                                    <div className="p-5 rounded-xl bg-white border border-neutral-200 h-full">
                                        <h3 className="font-semibold text-neutral-900 mb-2">{type.title}</h3>
                                        <p className="text-sm text-neutral-600">{type.desc}</p>
                                    </div>
                                </AnimatedDiv>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Industry-Adaptive Curriculum */}
            <section className="section-padding bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <BookOpen className="w-4 h-4" />
                            Adaptive Learning
                        </div>
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-6">
                            Industry-Adaptive Curriculum
                        </h2>
                        <div className="space-y-4 text-left">
                            <p className="text-neutral-600 leading-relaxed">
                                <span className="font-semibold text-neutral-900">Foundation content</span> remains
                                consistent—fundamental management, finance, analytics, leadership.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                <span className="font-semibold text-neutral-900">Application changes by industry</span>—cases,
                                projects, guest faculty reflect specific sectors.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                <span className="font-semibold text-neutral-900">Cohort structure enables customization</span>—agriculture,
                                fashion, sports cohorts get same core knowledge applied differently.
                            </p>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Research Infrastructure */}
            <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-950 text-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                            <FlaskConical className="w-4 h-4" />
                            Think Tank
                        </div>
                        <h2 className="text-heading-1 font-bold mb-6">
                            Research Infrastructure for Real Questions
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed mb-8">
                            Students don't just learn existing frameworks—they generate new knowledge
                            addressing specific challenges. Investigate questions unique to your context
                            that existing literature may not address.
                        </p>
                        <Button as="link" href="/think-tank" variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                            Explore Think Tank
                        </Button>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Who We Serve */}
            <section className="section-padding bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Matching What People Need with What We Offer
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedDiv animation="fadeUp" delay={0.1}>
                            <div className="h-full p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
                                <h3 className="text-xl font-bold text-neutral-900 mb-6">Who needs this:</h3>
                                <ul className="space-y-3">
                                    {whoNeeds.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-neutral-700">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <div className="h-full p-8 rounded-2xl bg-primary-50 border border-primary-200">
                                <h3 className="text-xl font-bold text-primary-900 mb-6">What we provide:</h3>
                                <ul className="space-y-3">
                                    {whatWeProvide.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-primary-800">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Why This Model Works */}
            <section className="section-padding bg-neutral-50">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Why This Model Works
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        <AnimatedDiv animation="fadeUp" delay={0.1}>
                            <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200">
                                <div className="p-3 rounded-xl bg-green-100 text-green-600 w-fit mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-3">Financial Sustainability</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    Low fixed costs, variable costs that scale, accessible pricing.
                                    Sustainable cycle: more students → more resources → better outcomes → stronger reputation.
                                </p>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200">
                                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 w-fit mb-4">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-3">Educational Effectiveness</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    Hybrid learning for working professionals is often superior. Immediate application,
                                    maintained context, diverse perspectives, technology preparation.
                                </p>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeUp" delay={0.3}>
                            <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200">
                                <div className="p-3 rounded-xl bg-purple-100 text-purple-600 w-fit mb-4">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-3">Scalability</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    Platform costs don't increase proportionally. Public spaces exist everywhere.
                                    Faculty can teach remotely. We can serve 10x without fundamentally changing how we operate.
                                </p>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Value Created */}
            <section className="section-padding bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Value Created for You
                        </h2>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {studentValue.map((item, i) => (
                            <MotionCard key={i} delay={i * 0.1}>
                                <div className="p-3 rounded-xl bg-primary-100 text-primary-600 w-fit mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-neutral-600">{item.desc}</p>
                            </MotionCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Value for Your Work */}
            <section className="section-padding bg-neutral-50">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Value for Your Work &amp; Ventures
                        </h2>
                        <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
                            Whether it's a venture, an organization, or a community initiative—you'll have the strategic frameworks and operational tools to do it sustainably.
                        </p>
                    </AnimatedSection>

                    <AnimatedDiv animation="fadeUp" delay={0.2}>
                        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white border border-neutral-200 shadow-soft">
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {workValue.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedDiv>
                </Container>
            </section>

            {/* Value for Communities */}
            <section className="section-padding bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Value for Communities &amp; Markets
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
                        {communityValue.map((item, i) => (
                            <StaggerItem key={i}>
                                <MotionCard className="h-full" delay={i * 0.1}>
                                    <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-neutral-600">{item.desc}</p>
                                </MotionCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* What Makes This Sustainable */}
            <section className="section-padding bg-neutral-50">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            What Makes This Sustainable Long-Term
                        </h2>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sustainabilityFactors.map((item, i) => (
                            <AnimatedDiv key={i} animation="fadeUp" delay={i * 0.1}>
                                <div className="h-full p-6 rounded-2xl bg-white border border-neutral-200">
                                    <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-neutral-600">{item.desc}</p>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Core Insight */}
            <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
                <Container variant="narrow">
                    <AnimatedSection animation="fadeUp" className="text-center">
                        <h2 className="text-heading-1 font-bold mb-8">Core Insight</h2>
                        <div className="space-y-6 text-xl text-white/90 leading-relaxed">
                            <p>
                                Traditional business schools built their models when physical presence
                                was necessary for education delivery. <span className="text-accent-400">That constraint no longer exists.</span>
                            </p>
                            <p className="font-semibold text-white">We're not cutting corners. We're cutting costs that don't serve learning.</p>
                            <p className="font-semibold text-white">We're not lowering standards. We're eliminating barriers.</p>
                            <p className="font-semibold text-white">We're not offering less. We're delivering more of what actually matters.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mt-10">
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
        </>
    );
}
