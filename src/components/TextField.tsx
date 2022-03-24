import css from "./TextField.module.css";
import { Field,ErrorMessage } from "formik";
import TextError from "./TextError";

function TextField({ ...props }) {
  return (
    <>
      <div className={css["label-input"]}>
        <label htmlFor={props.name}>{props.label}</label>
        <Field required className={css["custom-input-css"]} {...props} />
        <ErrorMessage className={css['wrap-error']} name={props.name} component={TextError} />
        <br />
      </div>
    </>
  );
}

export default TextField;
