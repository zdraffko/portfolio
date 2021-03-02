import React from "react";
import styles from "./ContactSection.module.scss";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import SocialNetworks from "./SocialNetworks/SocialNetworks";
import NavArrows from "../../navigation/NavArrows/NavArrows";

const ContactSection: React.FC = () => (
  <section id="contact" className={styles.ContactSection}>
    <SectionTitle title="Contact" subtitle="You can find me on" darkMode />
    <SocialNetworks />
    <div className={styles.ArrowsContainer}>
      <NavArrows link="#about" label="projects" direction="up" />
    </div>
  </section>
);

export default ContactSection;
