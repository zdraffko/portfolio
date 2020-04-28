import React from "react";
import styles from "./ContactSection.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

const ContactSection = () => (
  <section id="contact" className={styles.ContactSection}>
    <SectionTitle title="Contact" subtitle="You can find me on" darkMode />
    <SocialNetworks />
  </section>
);

export default ContactSection;
