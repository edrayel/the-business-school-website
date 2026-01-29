import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Faculty",
    description: "Meet our faculty of PhD-qualified educators and industry practitioners who bring real-world expertise to THE Business School.",
};

export default function FacultyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
