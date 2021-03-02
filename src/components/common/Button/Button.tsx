import React from "react";
import styles from "./Button.module.scss";

interface IProps {
    onClick: () => void;
    content: string;
    isActive?: boolean;
}

const Button: React.FC<IProps> = ({ onClick, content, isActive }) => (
  <button
    className={isActive ? `${styles.Button} ${styles.Active}` : `${styles.Button}`}
    type="button"
    onClick={onClick}
  >
    {content}
  </button>
);

export default Button;
