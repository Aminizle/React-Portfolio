import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="absolute inset-0 -z-10">
      {/* Dark Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 20% 30%, #0f172a, #111827)",
        }}
      />

      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: false, mode: "repulse" },
              onClick: { enable: false, mode: "push" },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 150, duration: 0.6 },
              grab: { distance: 200, links: { opacity: 0.4 } },
            },
          },
          particles: {
            number: { value: 140, density: { enable: true, area: 900 } },
            color: { value: ["#22d3ee", "#3b82f6", "#a78bfa", "#f472b6"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.8,
              random: true,
              animation: { enable: true, speed: 1.5, minimumValue: 0.3 },
            },
            size: {
              value: { min: 2, max: 8 },
              random: true,
              animation: { enable: true, speed: 3, minimumValue: 1 },
            },
            move: {
              enable: true,
              speed: 1.8,
              direction: "top-right",
              outModes: { default: "out" },
              random: true,
              straight: false,
            },
            links: {
              enable: true,
              distance: 140,
              color: "#3b82f6",
              opacity: 0.25,
              width: 1.5,
            },
            wobble: { enable: true, distance: 2, speed: 0.8 },
            twinkle: {
              enable: true,
              frequency: 0.05,
              opacity: 0.8,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Particle;
