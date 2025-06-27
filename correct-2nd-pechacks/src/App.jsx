import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import EventGlimpse from "./components/EventGlimpse";
import Domains from "./components/Domains";
import Prizes from "./components/Prizes";
import Sponsors from "./components/Sponsors";
import Judges from "./components/Judges";
import WorkshopsSection from "./components/WorkshopsSection";
import Timeline from "./components/Timeline";
import FAQ from "./components/FAQ";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import { Particles } from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import PartnerWithUs from "./components/PartnerWithUs";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const particlesInit = async (engine) => {
    await loadBasic(engine);
  };

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={`min-h-screen bg-black text-white relative transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#00d9ff", "#a855f7", "#ec4899"],
            },
            links: {
              color: "#00d9ff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <EventGlimpse />
        <Domains />
        <Prizes />
        <Judges />
        <WorkshopsSection />
        <Sponsors />
        <Timeline />
        <OurTeam />
        <PartnerWithUs/>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
