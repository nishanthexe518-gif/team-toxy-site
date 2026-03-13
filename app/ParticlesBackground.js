"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full -z-10"
      options={{
        background: {
          color: "#000000"
        },
        particles: {
          number: {
            value: 60
          },
          color: {
            value: "#ff7b00"
          },
          links: {
            enable: true,
            color: "#ff7b00",
            distance: 150
          },
          move: {
            enable: true,
            speed: 1.5
          },
          size: {
            value: 3
          }
        }
      }}
    />
  );
}