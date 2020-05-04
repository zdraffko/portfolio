import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./Button.module.scss";

interface IProps {
    onClick: () => void;
    content: string;
    isActive?: Boolean;
}

const Button: React.FC<IProps> = ({ onClick, content, isActive }) => (
  <Fade triggerOnce duration={1500}>
    <button
      className={isActive ? `${styles.Button} ${styles.Active}` : `${styles.Button}`}
      type="button"
      onClick={onClick}
    >
      {content}
    </button>
  </Fade>
);

export default Button;
