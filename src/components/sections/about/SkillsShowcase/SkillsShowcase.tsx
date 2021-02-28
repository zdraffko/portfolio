import React from "react";
import { Zoom } from "react-awesome-reveal";
import styles from "./SkillsShowcase.module.scss";

const SkillsShowcase = () => (
  <Zoom
    triggerOnce
    className={styles.SkillsShowcaseWrapper}
    duration={750}
  >
    <h2>Skills</h2>
    <div className={styles.SkillsShowcase}>
      <p>I have experience with the following</p>
      <ul className={styles.OuterList}>
        <li>
          Languages
          <ul className={styles.InnerList}>
            <li>C#</li>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>Java</li>
            <li>C</li>
          </ul>
        </li>

        <li>
          C# Frameworks
          <ul className={styles.InnerList}>
            <li>.NET Core</li>
            <li>ASP.NET Core</li>
            <li>EF Core</li>
          </ul>
        </li>

        <li>
          C# Libraries
          <ul className={styles.InnerList}>
            <li>AutoMapper</li>
            <li>MediatR</li>
            <li>FluentValidation</li>
          </ul>
        </li>

        <li>
          JavaScript Libraries
          <ul className={styles.InnerList}>
            <li>React</li>
            <li>React-router-dom</li>
            <li>MobX</li>
            <li>Redux</li>
            <li>Axios</li>
            <li>Formik</li>
          </ul>
        </li>

        <li>
          DBMS
          <ul className={styles.InnerList}>
            <li>Microsoft SQL Server</li>
            <li>MySQL</li>
          </ul>
        </li>

        <li>
          Other
          <ul className={styles.InnerList}>
            <li>Git & GutHub</li>
            <li>HTML5 & CSS3(SCSS)</li>
          </ul>
        </li>
      </ul>
    </div>
  </Zoom>
);

export default SkillsShowcase;
