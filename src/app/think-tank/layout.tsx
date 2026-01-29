import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Think Tank",
    description: "THE Think Tank is a collaborative research and innovation platform where students, alumni, faculty, and practitioners work together on real challenges.",
};

export default function ThinkTankLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
