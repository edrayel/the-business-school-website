"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    bordered?: boolean;
    padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export function Card({
    children,
    className = "",
    hover = true,
    bordered = false,
    padding = "md",
}: CardProps) {
    const baseStyles = `rounded-2xl bg-white shadow-soft ${paddingStyles[padding]}`;
    const borderStyles = bordered ? "border border-neutral-200" : "";
    const hoverStyles = hover
        ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]"
        : "";

    return (
        <div className={`${baseStyles} ${borderStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
}

interface MotionCardProps extends CardProps {
    delay?: number;
}

export function MotionCard({
    children,
    className = "",
    hover = true,
    bordered = false,
    padding = "md",
    delay = 0,
}: MotionCardProps) {
    const baseStyles = `rounded-2xl bg-white shadow-soft ${paddingStyles[padding]}`;
    const borderStyles = bordered ? "border border-neutral-200" : "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={
                hover
                    ? { y: -6, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.18)" }
                    : undefined
            }
            className={`${baseStyles} ${borderStyles} transition-shadow ${className}`}
        >
            {children}
        </motion.div>
    );
}

interface IconCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
    delay?: number;
}

export function IconCard({
    icon,
    title,
    description,
    className = "",
    delay = 0,
}: IconCardProps) {
    return (
        <MotionCard className={className} delay={delay}>
            <div className="flex flex-col items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-100 text-primary-600">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">{description}</p>
                </div>
            </div>
        </MotionCard>
    );
}
