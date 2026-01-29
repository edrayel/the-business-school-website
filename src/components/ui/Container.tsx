import { ReactNode } from "react";

type ContainerVariant = "default" | "narrow" | "wide";

interface ContainerProps {
    variant?: ContainerVariant;
    children: ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}

const variantStyles: Record<ContainerVariant, string> = {
    default: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
    narrow: "mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8",
    wide: "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8",
};

export function Container({
    variant = "default",
    children,
    className = "",
    as: Component = "div",
}: ContainerProps) {
    return (
        <Component className={`${variantStyles[variant]} ${className}`}>
            {children}
        </Component>
    );
}
