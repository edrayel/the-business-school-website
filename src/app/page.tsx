import {
    HeroSection,
    AboutSection,
    WhoIsThisFor,
    MBAOverview,
    CurriculumHighlights,
    ThinkTankTeaser,
    WhyThisWorks,
    MissionStatement,
    CTASection,
} from "@/components/sections";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <WhoIsThisFor />
            <MBAOverview />
            <CurriculumHighlights />
            <ThinkTankTeaser />
            <WhyThisWorks />
            <MissionStatement />
            <CTASection />
        </>
    );
}
