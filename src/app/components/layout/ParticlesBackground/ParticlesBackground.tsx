import React from "react";
import Particles, { HoverMode } from "react-particles-js";
import styles from "./ParticlesBackground.module.scss";

const ParticlesBackground = () => (
  <div className={styles.ParticlesBackground}>
    <Particles
      className={styles.ParticlesWrapper}
      params={{
        particles: {
          number: { value: 40 },
          size: { value: 3 },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: HoverMode.repulse,
            },
          },
        },
      }}
    />
  </div>
);

export default ParticlesBackground;
