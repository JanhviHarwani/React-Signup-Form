import formImg from "../asset/form-img.png";
import css from "./signUp.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { userActionCreator } from "../redux/ActionCreator";
import TextField from "./TextField";

import { useNavigate } from "react-router-dom";
import TextError from "./TextError";

import User from "../interface/User";
import { ValidationSchema } from "../validation/SigninSchema";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (values: User) => {
    const URLphoto = URL.createObjectURL(values.photo as Blob | MediaSource);
    if (values.photo) {
      dispatch(
        userActionCreator({
          user: {
            ...values,
            photo: URLphoto,
          },
          isSubmitting: true,
        })
      );
    }
  
    localStorage.setItem("Name", values.name);
    localStorage.setItem("Logged-In", "true");
    localStorage.setItem("Email", values.email);
    localStorage.setItem("Phone", values.phone);
    localStorage.setItem("Password", values.password);
    localStorage.setItem("Confirm-Password", values.confirmpassword);
    localStorage.setItem("Profile-Pic", URLphoto);

    navigate("/home");
  };

  const initialValues = {
    photo: null,
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({
          isSubmitting,
          isValid,
          setFieldValue,
          values,

          dirty,
          handleReset,
        }) => (
          <div className={css["flex-form"]}>
            <div className={css["custom-form"]}>
              <Form>
                <h1>SignUp</h1>
                <br />
                <div className={css["add-pic"]}>
                  <label
                    htmlFor={css["upload-photo"]}
                    className={css["label-upload-pic"]}
                  >
                    Photo +
                    <Field
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        if (event.currentTarget.files) {
                          const file = event.currentTarget.files[0];
                          setFieldValue("photo", file);
                        }
                      }}
                      value={undefined}
                      type={"file"}
                      name="photo"
                      id={css["upload-photo"]}
                    />
                    <p>{(values.photo as unknown as File)?.name}</p>
                    <ErrorMessage
                      className={css["wrap-error"]}
                      name="photo"
                      component={TextError}
                    />
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
                  <TextField type="tel" id="phone" name="phone" label="Phone" placeholder="+91" />
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
                    disabled={!isValid || isSubmitting || !dirty}
                  >
                    Submit
                  </button>
                  <button
                    className={`${css["reset-button"]} btn btn-danger`}
                    type="reset"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </Form>
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
        )}
      </Formik>
    </>
  );
}

export default SignUp;
