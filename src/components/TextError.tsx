import React from "react";
import css from "./TextError.module.css";

const TextError: React.FC = ({ children }) => {
  return <div className={css["error"]}>{children}</div>;
};

export default TextError;
