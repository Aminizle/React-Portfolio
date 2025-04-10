import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "#0a0a0a", // Darker background for better contrast
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
              parallax: {
                enable: false,
                force: 30,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#06b6d4", "#3b82f6", "#8b5cf6"], // Cyan, blue, purple gradient
          },
          links: {
            color: "#06b6d4", // Cyan links
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1.2,
            triangles: {
              enable: true,
              color: "#3b82f6",
              opacity: 0.1
            }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "out"
            },
            trail: {
              enable: true,
              length: 10,
              fillColor: "#000000"
            }
          },
          number: {
            value: 60,
            density: {
              enable: true,
              area: 1000
            }
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            polygon: {
              sides: 5
            }
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.1,
              sync: false
            }
          },
          wobble: {
            enable: true,
            distance: 5,
            speed: 1
          }
        },
        detectRetina: true,
        motion: {
          disable: false,
          reduce: {
            factor: 3,
            value: true
          }
        }
      }}
    />
  );
}

export default Particle;