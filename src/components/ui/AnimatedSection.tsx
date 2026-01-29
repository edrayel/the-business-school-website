"use client";

import { ReactNode } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
    children: ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale";
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
}

const animations: Record<string, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function AnimatedSection({
    children,
    className = "",
    animation = "fadeUp",
    delay = 0,
    duration = 0.7,
    once = true,
    amount = 0.2,
    ...props
}: AnimatedSectionProps) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={animations[animation]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.section>
    );
}

interface AnimatedDivProps extends Omit<HTMLMotionProps<"div">, "children"> {
    children: ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale";
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
}

export function AnimatedDiv({
    children,
    className = "",
    animation = "fadeUp",
    delay = 0,
    duration = 0.7,
    once = true,
    amount = 0.2,
    ...props
}: AnimatedDivProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={animations[animation]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
    amount?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    once = true,
    amount = 0.2,
    ...props
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
    children: ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale";
    duration?: number;
}

export function StaggerItem({
    children,
    className = "",
    animation = "fadeUp",
    duration = 0.5,
    ...props
}: StaggerItemProps) {
    return (
        <motion.div
            variants={animations[animation]}
            transition={{
                duration,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
