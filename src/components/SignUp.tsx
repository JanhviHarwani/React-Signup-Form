import formImg from "../asset/form-img.png";
import css from "./signUp.module.css";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import  userActionCreator  from "../redux/userActionCreator";

import TextField from "./TextField";
import * as Yup from "yup";
import "yup-phone";
import { UserState } from "../redux/userReducer";

function SignUp() {
  const dispatch = useDispatch();
  const userData = useSelector<UserState, UserState>((state) => state.user);

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirmpassword: "",
  // };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    phone: Yup.string().phone("IN", true).required("Phone NO. is Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase,Lowercase,Number and special case"
      )
      .required("Password is Required"),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const onSubmit = (values: any) => {
    console.log(values);
    dispatch(userActionCreator(values))
  };
  return (
    <>
      <Formik
        initialValues={userData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ isSubmitting, isValid }) => (
          <div className={css["flex-form"]}>
            <div className={css["custom-form"]}>
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
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    label="Name"
                  ></TextField>
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
                    disabled={!isValid || isSubmitting}
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
