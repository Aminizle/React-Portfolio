import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle({ theme = "dark" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: remove in production
    console.log(container);
  }, []);

  const isDark = theme === "dark";

  const bgColor = isDark ? "#0f172a" : "#f1f5f9";
  const particleColors = isDark
    ? ["#06b6d4", "#3b82f6", "#8b5cf6"] // cyan, blue, purple
    : ["#2563eb", "#22c55e", "#f59e0b"]; // blue, green, yellow
  const linkColor = isDark ? "#06b6d4" : "#2563eb";

  return (
    <div className="absolute inset-0 -z-10">
      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(circle at 20% 30%, #0f172a, #000000)"
            : "radial-gradient(circle at 20% 30%, #f1f5f9, #e5e7eb)",
        }}
      ></div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: bgColor } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              push: { quantity: 3 },
              grab: { distance: 140, links: { opacity: 0.5 } },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            number: { value: 50, density: { enable: true, area: 900 } },
            color: { value: particleColors },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              animation: { enable: true, speed: 1, minimumValue: 0.2 },
            },
            size: {
              value: { min: 1, max: 6 },
              animation: { enable: true, speed: 3, minimumValue: 0.5, destroy: "max" },
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
              color: linkColor,
              opacity: 0.15,
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
