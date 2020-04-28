import React from "react";
import style from "./SocialNetworks.module.scss";

const SocialNetworks = () => (
  <div className={style.SocialNetworks}>
    <ul className={style.SocialIcons}>
      <li>
        <a href="https://github.com/zdraffko" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-2x fa-github" />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/zdraffko" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-2x fa-linkedin" />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/programming_plus_plus/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-2x fa-instagram" />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialNetworks;
