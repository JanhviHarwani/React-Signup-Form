import formImg from "../asset/form-img.png";
import css from "./signUp.module.css";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import  * as Yup from 'yup'

function SignUp() {
  const initialValues={
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  }
  const validationSchema=Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().required("Required"),
    number:Yup.string().required("Required"),
    password:Yup.string().required("Required"),
    confirmpassword:Yup.string().required("Required"),

  })
  const onSubmit=(values: any)=>console.log(values)
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
    onSubmit={onSubmit}
      >
      
        <div className={css["flex-form"]}>
          <div className={css["custom-form"]}>
            {" "}
            {(formik: any) => (
            <Form>
              <h1>SignUp</h1>
              <br />

              <div className={css["add-pic"]}>
                <label
                  className={css["label-upload-pic"]}
                  htmlFor="upload-photo"
                >
                  <input
                    type="file"
                    name="photo"
                    id={css["upload-photo"]}
                    hidden
                  />
                  Photo +
                </label>
              </div>
              <div className={css["form-fields"]}>
                <TextField type="text" id="name" name="name" label="Name" />
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  label="E-mail"
                />
                <TextField type="tel" id="phone" name="phone" label="Phone" />
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                />
                <TextField
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  label="Confirm Password"
                />
              </div>
              <div className="form-bttons">
                <button
                  className={`${css["submit-button"]} btn btn-primary`}
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className={`${css["reset-button"]} btn btn-danger`}
                  type="reset"
                >
                  Reset
                </button>
              </div>

            </Form>
            )}
          </div>

          <div className={css["flex-image"]}>
            <img
              height="500px"
              width="auto"
              src={formImg}
              alt="No preview found"
            />
          </div>
        </div>
      </Formik>
    </>
  );
}

export default SignUp;
