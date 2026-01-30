"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown, Mail, Linkedin, ArrowRight } from "lucide-react";
import { Container, AnimatedSection, AnimatedDiv, Button } from "@/components/ui";

interface FacultyMember {
    id: string;
    name: string;
    role: string;
    image: string;
    background: string;
    teaches: string[];
    brings: string;
    quote: string;
}

const faculty: FacultyMember[] = [
    {
        id: "felix-rafiki",
        name: "Dr. Felix Rafiki",
        role: "Assistant Professor of Social Entrepreneurship & Innovation",
        image: "/faculty/felix-rafiki.jpg",
        background: "PhD in Management from University of Carrickmore. MBA from Swancity. Fifteen years building and advising social enterprises across West Africa, including Chief Innovation Officer for a major microfinance institution reaching 200,000 clients.",
        teaches: [
            "Social venture strategy",
            "Bottom-of-the-pyramid business models",
            "Scaling in resource-constrained environments",
            "Cross-sector partnerships",
        ],
        brings: "Dr. Rafiki has built the kinds of ventures many students aspire to create. He knows what works in theory and what actually works when operating with limited capital in complex institutional environments. His networks across Africa provide students access to real opportunities and partnerships.",
        quote: "I spent years learning expensive lessons. I teach so students can skip some of those lessons and move faster to what actually matters—building things that last and create real value for people who need it.",
    },
    {
        id: "amara-okonkwo",
        name: "Dr. Amara Okonkwo",
        role: "Associate Professor of Finance & Development Economics",
        image: "/faculty/placeholder.jpg",
        background: "PhD in Economics from London School of Economics. Former World Bank consultant. Led financial inclusion initiatives across Sub-Saharan Africa impacting over 500,000 households.",
        teaches: [
            "Development finance",
            "Impact investing",
            "Financial inclusion strategies",
            "Microfinance and alternative lending",
        ],
        brings: "Dr. Okonkwo bridges the gap between global financial institutions and grassroots development. Her research on innovative financing mechanisms for underserved markets has been published in leading journals and influenced policy decisions.",
        quote: "Finance is a tool—nothing more. My job is to help you wield it effectively to create the change you want to see in the world.",
    },
    {
        id: "marcus-chen",
        name: "Prof. Marcus Chen",
        role: "Professor of Operations & Supply Chain Management",
        image: "/faculty/placeholder.jpg",
        background: "MBA from Wharton. 20 years in supply chain management for Fortune 500 companies. Founded a sustainable logistics startup that was acquired in 2019.",
        teaches: [
            "Operations management",
            "Sustainable supply chains",
            "Lean methodologies for resource-constrained environments",
            "Technology in logistics",
        ],
        brings: "Prof. Chen has managed supply chains across 30+ countries and understands the unique challenges of operating in emerging markets. He brings practical frameworks that work even when you don't have ideal resources.",
        quote: "Efficiency isn't about having perfect systems—it's about making the most of what you have. That's what I teach.",
    },
    {
        id: "sarah-adeyemi",
        name: "Dr. Sarah Adeyemi",
        role: "Assistant Professor of Marketing & Consumer Behavior",
        image: "/faculty/placeholder.jpg",
        background: "PhD in Marketing from Northwestern. Former CMO for a leading African e-commerce platform. Expert in digital marketing for emerging markets.",
        teaches: [
            "Marketing strategy",
            "Digital marketing in emerging markets",
            "Consumer behavior",
            "Brand building on limited budgets",
        ],
        brings: "Dr. Adeyemi understands marketing from both academic and practitioner perspectives. She's built brands that resonate with diverse audiences and knows how to achieve impact without massive budgets.",
        quote: "Great marketing isn't about outspending your competition—it's about understanding your customer better than anyone else.",
    },
];

function FacultyCard({ member, index }: { member: FacultyMember; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-medium transition-shadow"
        >
            {/* Header */}
            <div className="p-6 pb-0">
                <div className="flex items-start gap-4">
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary-600">
                            {member.name.split(" ").map(n => n[0]).join("")}
                        </span>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
                        <p className="text-sm text-primary-600 font-medium">{member.role}</p>
                    </div>
                </div>

                {/* Quote */}
                <div className="mt-6 p-4 rounded-xl bg-neutral-50 border-l-4 border-primary-500">
                    <div className="flex gap-2">
                        <Quote className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-neutral-700 italic leading-relaxed">
                            &quot;{member.quote}&quot;
                        </p>
                    </div>
                </div>
            </div>

            {/* Expandable Content */}
            <div className="px-6 pb-6 pt-4">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors"
                >
                    {isExpanded ? "Show Less" : "View Full Profile"}
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-6 pt-4 border-t border-neutral-100">
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">Background</h4>
                                    <p className="text-sm text-neutral-700 leading-relaxed">{member.background}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">What they teach</h4>
                                    <ul className="flex flex-wrap gap-2">
                                        {member.teaches.map((topic, i) => (
                                            <li key={i} className="px-3 py-1 text-xs rounded-full bg-primary-100 text-primary-700">
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">What they bring to students</h4>
                                    <p className="text-sm text-neutral-700 leading-relaxed">{member.brings}</p>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <a href="#" className="p-2 rounded-lg bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                    <a href="#" className="p-2 rounded-lg bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default function FacultyPage() {
    return (
        <>
            {/* Hero */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 relative overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 -left-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
                    />
                </div>

                <Container className="relative z-10">
                    <AnimatedSection animation="fadeUp" className="max-w-3xl">
                        <h1 className="text-display-2 font-bold text-white mb-6">
                            Our Faculty: Expertise That Serves Your Goals
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            We hire people who can teach and people who know what they&apos;re talking about. That&apos;s it.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Intro */}
            <section className="section-padding-sm bg-white">
                <Container variant="narrow">
                    <AnimatedSection animation="fadeUp" className="text-center">
                        <p className="text-body-lg text-neutral-700 leading-relaxed">
                            Our faculty hold advanced degrees from respected institutions. They&apos;ve published research.
                            They&apos;ve built businesses, advised organizations, worked in the sectors they teach about.
                            They know their subjects deeply and they know how to help you learn them.
                        </p>
                        <p className="text-body text-neutral-700 mt-6">
                            We don&apos;t hire based on prestige or pedigree. We hire based on whether someone can make
                            complex ideas clear, whether they&apos;ve done the work they&apos;re teaching, and whether
                            they&apos;re committed to your success.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>

            {/* Faculty Grid */}
            <section className="section-padding bg-neutral-50">
                <Container>
                    <AnimatedSection animation="fadeUp" className="text-center mb-12">
                        <h2 className="text-heading-1 font-bold text-neutral-900 mb-4">
                            Meet Our Faculty
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {faculty.map((member, index) => (
                            <FacultyCard key={member.id} member={member} index={index} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Join Faculty CTA */}
            <section className="section-padding bg-white">
                <Container variant="narrow">
                    <AnimatedSection animation="fadeUp" className="text-center">
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
                            <h2 className="text-heading-2 font-bold text-neutral-900 mb-4">
                                Join Our Faculty
                            </h2>
                            <p className="text-neutral-700 mb-6 max-w-lg mx-auto">
                                We&apos;re always looking for exceptional educators who combine academic rigor
                                with real-world experience. If that&apos;s you, we&apos;d love to hear from you.
                            </p>
                            <Button
                                as="link"
                                href="/contact"
                                variant="primary"
                                icon={<ArrowRight className="w-5 h-5" />}
                            >
                                Get in Touch
                            </Button>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </>
    );
}
