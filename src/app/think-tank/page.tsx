"use client";

import { motion } from "framer-motion";
import {
    Lightbulb,
    Users,
    FileText,
    MessageCircle,
    Rocket,
    GraduationCap,
    Building2,
    Globe,
    Calendar,
    Trophy,
    Mic,
    Monitor,
    MapPin,
    Check,
    X,
    ArrowRight,
    Mail,
} from "lucide-react";
import { Container, AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem, Button, MotionCard, Accordion } from "@/components/ui";

const participants = [
    "Current students applying what they're learning",
    "Alumni continuing to develop ventures",
    "Faculty exploring questions that need answering",
    "Partner organizations needing analytical support",
    "Community members with expertise to contribute",
    "Practitioners working on specific challenges",
];

const activities = [
    {
        id: "research",
        icon: <FileText className="w-5 h-5" />,
        title: "Research That Solves Problems",
        content: (
            <div className="space-y-4">
                <p>Research at THE Think Tank addresses questions that matter to people building things. Not research for publication's sake—research to inform decisions and generate new solutions.</p>
                <p className="font-medium text-neutral-800">Questions we explore:</p>
                <ul className="list-disc list-inside text-neutral-600 space-y-1 ml-2">
                    <li>What business models work for smallholder farmers in specific regions?</li>
                    <li>How do microenterprises in informal economies access capital?</li>
                    <li>What factors determine success for women-led ventures?</li>
                    <li>How can technology improve service delivery in resource-constrained settings?</li>
                </ul>
                <p className="text-primary-600 font-medium">Everything produced is shared openly unless there are specific confidentiality needs.</p>
            </div>
        ),
    },
    {
        id: "working-groups",
        icon: <Users className="w-5 h-5" />,
        title: "Industry Working Groups",
        content: (
            <div className="space-y-4">
                <p>Ongoing communities organized around specific sectors:</p>
                <div className="grid sm:grid-cols-2 gap-2">
                    {[
                        "Agriculture & Food Systems",
                        "Financial Inclusion & Fintech",
                        "Sustainable Fashion & Supply Chains",
                        "Education & Skills Development",
                        "Health Systems & Access",
                        "Climate & Environmental Business",
                        "Women's Economic Empowerment",
                        "Technology for Social Impact",
                    ].map((group, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                            {group}
                        </div>
                    ))}
                </div>
                <p className="text-neutral-600">Groups meet monthly in hybrid format. <span className="font-medium text-neutral-800">These aren't networking groups—they're working groups.</span></p>
            </div>
        ),
    },
    {
        id: "practitioners",
        icon: <Mic className="w-5 h-5" />,
        title: "Learning From Practitioners",
        content: (
            <div className="space-y-4">
                <p>Regular sessions with people doing the work—entrepreneurs, investors, policymakers, operators sharing specific insights you can use.</p>
                <p className="font-medium text-primary-700">Not motivational speeches. Knowledge transfer.</p>
                <p className="text-neutral-600">Sessions are hybrid. Recordings available for those who can't attend live.</p>
            </div>
        ),
    },
    {
        id: "venture",
        icon: <Rocket className="w-5 h-5" />,
        title: "Venture Development Support",
        content: (
            <div className="space-y-4">
                <p>For people building businesses or organizations:</p>
                <ul className="list-disc list-inside text-neutral-600 space-y-1 ml-2">
                    <li>Feedback sessions on your model</li>
                    <li>Office hours with faculty and experienced entrepreneurs</li>
                    <li>Help validating markets and testing assumptions</li>
                    <li>Connections to potential partners and investors</li>
                </ul>
                <p className="text-neutral-600">This isn't formal incubation. It's <span className="font-medium text-neutral-800">ongoing support from people who know what you're going through.</span></p>
            </div>
        ),
    },
];

const howItWorks = [
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "For Students",
        description: "Think Tank is integrated into your learning. Course projects involve collaboration. Propose independent research. Participate in working groups.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "For Alumni",
        description: "Continued connection and support. Ongoing access to expertise. Alumni contribute as mentors, sharing expertise, and bringing projects.",
    },
    {
        icon: <Building2 className="w-6 h-6" />,
        title: "For Organizations",
        description: "Analytical capacity and fresh perspectives. Submit challenges. Work with student teams. Commission research on specific questions.",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "For Community",
        description: "If you have relevant expertise, contribute. Join working groups. Attend open events. Propose collaborative research.",
    },
];

const signaturePrograms = [
    {
        icon: <Calendar className="w-6 h-6" />,
        title: "Annual Transformation Summit",
        description: "Full-day convening bringing together social entrepreneurs, investors, policymakers, and practitioners. Features workshops, venture showcases, and presentation of Think Tank research.",
    },
    {
        icon: <Trophy className="w-6 h-6" />,
        title: "Venture Challenge",
        description: "Annual competition where participants pitch ventures addressing development challenges. Winners receive seed funding, mentorship, and Think Tank support.",
    },
    {
        icon: <Mic className="w-6 h-6" />,
        title: "Practitioner-in-Residence",
        description: "Each term, an accomplished entrepreneur or development practitioner teaches, mentors students, and creates connections between students and their networks.",
    },
];

const shouldEngage = [
    "You're working on a real challenge and need perspectives beyond your own",
    "You have expertise that could help others solve problems",
    "You're building a venture or organization and need support",
    "You have research questions that need rigorous investigation",
];

const shouldNot = [
    "You're looking for networking without contributing",
    "You want theoretical discussions disconnected from application",
    "You're not willing to share what you're learning",
];

export default function ThinkTankPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-20 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
                    />
                </div>

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeUp" className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
                            <Lightbulb className="w-4 h-4" />
                            Beyond the Classroom
                        </div>
                        <h1 className="text-display-2 font-bold text-white mb-6">
                            THE Think Tank: Where Learning Continues
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            The MBA gives you tools. THE Think Tank gives you a place to use them.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Intro */}
            <section className="section-padding-sm bg-white">
                <Container variant="narrow">
                    <AnimatedSection animation="fadeUp" className="text-center">
                        <p className="text-body-lg text-neutral-700 leading-relaxed">
                            This isn't an academic research center publishing papers nobody reads. It's a working
                            space where students, alumni, partners, and practitioners collaborate on actual problems.
                            Where ideas get tested. Where projects get built.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* What It Is */}
            <section className="section-padding bg-neutral-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="fadeUp">
                            <h2 className="text-heading-1 font-bold text-neutral-900 mb-6">
                                What It Is
                            </h2>
                            <p className="text-body-lg text-neutral-600 mb-6">
                                THE Think Tank is a collaborative platform—both digital and physical—where
                                people come together to work on things that matter.
                            </p>
                            <p className="text-neutral-600">
                                Structured enough to be productive. Flexible enough to respond to what people actually need.
                            </p>
                        </AnimatedSection>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-soft">
                                <h3 className="font-semibold text-neutral-900 mb-4">Who participates:</h3>
                                <ul className="space-y-3">
                                    {participants.map((p, i) => (
                                        <li key={i} className="flex items-center gap-3 text-neutral-600">
                                            <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Core Activities */}
            <section className="section-padding bg-white">
                <Container variant="narrow">
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Core Activities
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeUp" delay={0.2}>
                        <Accordion items={activities} />
                    </AnimatedSection>
                </Container>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-neutral-50">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            How It Works
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
                        {howItWorks.map((item, i) => (
                            <StaggerItem key={i}>
                                <MotionCard className="h-full text-center" delay={i * 0.1}>
                                    <div className="p-3 rounded-xl bg-primary-100 text-primary-600 w-fit mx-auto mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-neutral-600">{item.description}</p>
                                </MotionCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Container>
            </section>

            {/* Where It Happens */}
            <section className="section-padding bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Where It Happens
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedDiv animation="fadeUp" delay={0.1}>
                            <div className="h-full p-6 rounded-2xl bg-primary-50 border border-primary-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary-100 text-primary-600">
                                        <Monitor className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-semibold text-neutral-900">Digital Platform</h3>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    Primary workspace for ongoing collaboration: project management tools,
                                    discussion forums, resource library, calendar of events, and matching
                                    system connecting people with complementary skills. Accessible anytime, anywhere.
                                </p>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <div className="h-full p-6 rounded-2xl bg-accent-50 border border-accent-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-accent-100 text-accent-600">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-semibold text-neutral-900">Physical Sessions</h3>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    Monthly gatherings in community centers, working group meetings in libraries
                                    or cafés, intensive workshops in co-working spaces, and field research in
                                    communities where challenges exist.
                                </p>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Signature Programs */}
            <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-950 text-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold mb-4">
                            Signature Programs
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {signaturePrograms.map((program, i) => (
                            <AnimatedDiv key={i} animation="fadeUp" delay={i * 0.15}>
                                <div className="h-full p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <div className="p-3 rounded-xl bg-white/20 text-white w-fit mb-4">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">{program.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">{program.description}</p>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Who Should Engage */}
            <section className="section-padding bg-white">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Who Should Engage
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <AnimatedDiv animation="fadeUp" delay={0.1}>
                            <div className="h-full p-6 rounded-2xl bg-green-50 border border-green-200">
                                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                                    <Check className="w-5 h-5" />
                                    You should participate if:
                                </h3>
                                <ul className="space-y-3">
                                    {shouldEngage.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-green-700 text-sm">
                                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <div className="h-full p-6 rounded-2xl bg-red-50 border border-red-200">
                                <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                                    <X className="w-5 h-5" />
                                    You won't find value if:
                                </h3>
                                <ul className="space-y-3">
                                    {shouldNot.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-red-700 text-sm">
                                            <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>
                    </div>

                    <AnimatedDiv animation="fadeUp" delay={0.3} className="text-center mt-8">
                        <p className="text-neutral-600 italic">
                            This is for people building things, researching real questions, and helping others do the same.
                        </p>
                    </AnimatedDiv>
                </Container>
            </section>

            {/* Getting Involved */}
            <section className="section-padding bg-neutral-50">
                <Container variant="narrow">
                    <AnimatedSection animation="fadeUp" className="text-center">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-6">
                            Getting Involved
                        </h2>

                        <div className="space-y-4 text-left mb-10">
                            <p className="text-neutral-600">
                                <span className="font-semibold text-neutral-900">Current students:</span> Talk to your
                                faculty advisor about Think Tank opportunities.
                            </p>
                            <p className="text-neutral-600">
                                <span className="font-semibold text-neutral-900">Alumni:</span> Access through the alumni
                                portal to propose projects or offer mentorship.
                            </p>
                            <p className="text-neutral-600">
                                <span className="font-semibold text-neutral-900">Organizations:</span> Submit a project
                                proposal—we respond within two weeks.
                            </p>
                            <p className="text-neutral-600">
                                <span className="font-semibold text-neutral-900">Community:</span> Join our mailing list
                                for open sessions and event announcements.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Button as="link" href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                Get Involved
                            </Button>
                            <Button as="link" href="/contact" variant="secondary" size="lg" icon={<Mail className="w-5 h-5" />} iconPosition="left">
                                Join Mailing List
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Clarity Section */}
            <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
                <Container variant="narrow">
                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedDiv animation="fadeUp" delay={0.1}>
                            <h3 className="text-lg font-semibold text-white/60 mb-4">What This Isn't</h3>
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
                                    Not a consulting firm selling services
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
                                    Not an incubator taking equity in ventures
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
                                    Not traditional academic research for publication
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
                                    Not networking for networking's sake
                                </li>
                            </ul>
                        </AnimatedDiv>

                        <AnimatedDiv animation="fadeUp" delay={0.2}>
                            <h3 className="text-lg font-semibold text-accent-400 mb-4">What This Is</h3>
                            <p className="text-white/90 leading-relaxed">
                                A space where people working on real challenges access support, perspectives, and
                                collaboration that helps them do better work. A platform where learning continues
                                beyond coursework. A community of people who believe problems get solved when diverse
                                perspectives combine around shared commitment to finding solutions.
                            </p>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>
        </>
    );
}
