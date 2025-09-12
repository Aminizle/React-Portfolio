import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional debug
    // console.log(container);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {/* Dark Background Gradient */}
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
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              push: { quantity: 3 },
              grab: { distance: 140, links: { opacity: 0.3 } },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            number: { value: 120, density: { enable: true, area: 900 } },
            color: { value: ["#22d3ee", "#3b82f6", "#8b5cf6"] }, // cyan, blue, purple
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              animation: { enable: true, speed: 1, minimumValue: 0.2 },
            },
            size: {
              value: { min: 1, max: 6 },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.5,
                destroy: "max",
              },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "top",
              outModes: { default: "out" },
              random: true,
              straight: false,
            },
            links: {
              enable: true,
              distance: 120,
              color: "#3b82f6",
              opacity: 0.2,
              width: 1,
            },
            wobble: { enable: true, distance: 1, speed: 0.5 },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Particle;
