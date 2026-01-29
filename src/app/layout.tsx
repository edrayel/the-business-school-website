import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: "#1f8a93",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://thebusinessschool.edu"),
    title: {
        default: "THE Business School | Transform the World on Your Terms",
        template: "%s | THE Business School",
    },
    description:
        "Business education that meets your needs at a price that actually makes sense. Rigorous MBA curriculum with qualified faculty, comprehensive resources, and meaningful credentials.",
    keywords: [
        "MBA",
        "business school",
        "social entrepreneurship",
        "affordable MBA",
        "online MBA",
        "hybrid MBA",
        "business education",
        "social business",
        "entrepreneurship education",
    ],
    authors: [{ name: "THE Business School" }],
    creator: "THE Business School",
    publisher: "THE Business School",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://thebusinessschool.edu",
        siteName: "THE Business School",
        title: "THE Business School | Transform the World on Your Terms",
        description:
            "Business education that meets your needs at a price that actually makes sense. Rigorous MBA curriculum with qualified faculty, comprehensive resources, and meaningful credentials.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "THE Business School - Transformational. Heartsome. Entrepreneurial.",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "THE Business School | Transform the World on Your Terms",
        description:
            "Business education that meets your needs at a price that actually makes sense.",
        images: ["/og-image.jpg"],
        creator: "@thebusinessschool",
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon.svg", type: "image/svg+xml" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="min-h-screen flex flex-col">
                <a href="#main-content" className="skip-to-content">
                    Skip to main content
                </a>
                <Navigation />
                <main id="main-content" className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
