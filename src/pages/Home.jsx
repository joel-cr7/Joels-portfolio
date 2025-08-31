import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
    const hasVisitedLandingPage = sessionStorage.getItem("hasVisitedLandingPage"); // store flag in session storage weather user is visiting
    const [isLoaded, setIsLoaded] = useState(false); // keep track weather LoadingScreen has loaded or not

    return (
        <>
            {/* If the user hasn't visited the landing page, show it */}
            {!hasVisitedLandingPage && !isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

            <div className={`min-h-screen transition-opacity duration-1000 
                    ${isLoaded || hasVisitedLandingPage ? "opacity-100" : "opacity-0"} bg-background text-foreground overflow-x-hidden`}>

                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Background Effects */}
                <StarBackground />

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <main>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <Footer />

            </div>
        </>
    );
}

export default Home;
