"use client";

import { forwardRef, ReactNode } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
}

type ButtonAsButton = ButtonBaseProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        as?: "button";
        href?: never;
    };

type ButtonAsLink = ButtonBaseProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
        as: "link";
        href: string;
    };

type ButtonAsMotion = ButtonBaseProps &
    Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps> & {
        as: "motion";
        href?: never;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsMotion;

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-primary-600 text-white shadow-soft hover:bg-primary-700 hover:shadow-medium hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-primary-500",
    secondary:
        "border-2 border-primary-600 bg-transparent text-primary-600 hover:bg-primary-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-primary-500",
    accent:
        "bg-accent-500 text-white shadow-soft hover:bg-accent-600 hover:shadow-medium hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-accent-500",
    ghost:
        "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-400",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
};

export const Button = forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps
>(function Button(props, ref) {
    const {
        variant = "primary",
        size = "md",
        children,
        className = "",
        icon,
        iconPosition = "right",
        as = "button",
        ...rest
    } = props;

    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
        <>
            {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
        </>
    );

    if (as === "link") {
        const { href, ...linkRest } = rest as ButtonAsLink;
        return (
            <Link
                ref={ref as React.Ref<HTMLAnchorElement>}
                href={href}
                className={combinedStyles}
                {...linkRest}
            >
                {content}
            </Link>
        );
    }

    if (as === "motion") {
        const motionRest = rest as Omit<ButtonAsMotion, keyof ButtonBaseProps | "as">;
        return (
            <motion.button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={combinedStyles}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...motionRest}
            >
                {content}
            </motion.button>
        );
    }

    const buttonRest = rest as Omit<ButtonAsButton, keyof ButtonBaseProps | "as">;
    return (
        <button
            ref={ref as React.Ref<HTMLButtonElement>}
            className={combinedStyles}
            {...buttonRest}
        >
            {content}
        </button>
    );
});
