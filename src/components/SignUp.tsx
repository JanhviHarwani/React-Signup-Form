import formImg from "../asset/form-img.png";
import css from "./signUp.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userActionCreator } from "../redux/ActionCreator";
import TextField from "./TextField";
import * as Yup from "yup";
import "yup-phone";
import { UserState } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextError from "./TextError";

function SignUp({ LoggedInState }: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState<string>();
  const userData = useSelector<UserState, UserState>((state) => state.user);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    phone: Yup.string().phone("IN", true).required("Phone NO. is Required"),
    photo: Yup.mixed()
      .nullable()
      .required("profile is required!!!")
      .test("fileSize", "Image is too large", (value) => {
        return !value || (value !== null && value.size <= 2000000);
      })
      .test("fileType", "File type should be jpg or png only", (value) => {
        return (
          !value ||
          (value !== null && ["image/jpg", "image/png"].includes(value.type))
        );
      }),
    // password: Yup.string()
    //   .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, Lowercase, Number and a special case"
    //   )
    //   .required("Password is Required"),
    // confirmpassword: Yup.string().oneOf(
    //   [Yup.ref("password"), null],
    //   "Passwords must match"
    // ),
  });

  const onSubmit = (values: any) => {
    // console.log(typeof values);

    if (file) {
      dispatch(
        userActionCreator({ ...values, photo: URL.createObjectURL(file) })
      );
    }

    navigate("/home");
  };

  return (
    <>
      <Formik
        initialValues={userData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ isSubmitting, isValid, setFieldValue }) => (
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
                      onChange={(event: { currentTarget: { files: any[]; }; }) => {
                        const file = event.currentTarget.files[0];
                        setFileName(file.name);
                        setFieldValue("photo", file);
                        setFile(file);
                      }}
                      value={undefined}
                      type={"file"}
                      name="photo"
                      id={css["upload-photo"]}
                    />
                    <p>{fileName}</p>
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
                    onClick={() => LoggedInState(isValid)}
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
