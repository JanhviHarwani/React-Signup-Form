
import css from "./TextField.module.css";
import { Field } from "formik";

function TextField({ ...props }) {
  return (
    <>
      <div className={css["label-input"]}>
        <label htmlFor={props.name}>{props.label}</label>
        <Field className={css["custom-input-css"]} {...props} />
      </div>
    </>
  );
}

export default TextField;
