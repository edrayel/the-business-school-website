import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MBA Program",
    description: "THE Business School MBA in Social Business & Entrepreneurship - an affordable, flexible program for professionals ready to create real impact.",
};

export default function MBALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
