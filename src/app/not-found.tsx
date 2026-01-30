"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Container, Button } from "@/components/ui";

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex items-center bg-neutral-50">
            <Container variant="narrow">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* 404 Graphic */}
                    <div className="mb-8">
                        <span className="text-[8rem] md:text-[12rem] font-black text-primary-100 leading-none">
                            404
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                        Page Not Found
                    </h1>

                    <p className="text-neutral-700 mb-8 max-w-md mx-auto">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. Perhaps you&apos;d like
                        to explore our programs or head back home?
                    </p>

                    {/* Navigation Options */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Button
                            as="link"
                            href="/"
                            variant="primary"
                            icon={<Home className="w-5 h-5" />}
                            iconPosition="left"
                        >
                            Back to Home
                        </Button>
                        <Button
                            as="link"
                            href="/model"
                            variant="secondary"
                            icon={<ArrowLeft className="w-5 h-5" />}
                            iconPosition="left"
                        >
                            Our Model
                        </Button>
                    </div>

                    {/* Quick Links */}
                    <div className="border-t border-neutral-200 pt-8">
                        <p className="text-sm text-neutral-500 mb-4">Or try these popular pages:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/mba" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
                                MBA Program
                            </Link>
                            <Link href="/faculty" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
                                Faculty
                            </Link>
                            <Link href="/think-tank" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
                                Think Tank
                            </Link>
                            <Link href="/apply" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
