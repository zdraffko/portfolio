import React from "react";
import styles from "./ContactSection.module.scss";
import SectionTitle from "../../layout/SectionTitle/SectionTitle";

const ContactSection = () => (
  <section id="contact" className={styles.ContactSection}>
    <SectionTitle title="Contact" darkMode />
  </section>
);

export default ContactSection;
