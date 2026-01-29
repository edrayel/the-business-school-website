import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Model",
    description: "Learn how THE Business School delivers high-quality MBA education at a fraction of the cost through our innovative platform-first infrastructure and hybrid delivery model.",
};

export default function ModelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
