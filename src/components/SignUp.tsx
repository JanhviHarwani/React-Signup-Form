import formImg from "../asset/form-img.png";
import css from "./signUp.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userActionCreator, userActionLogOut } from "../redux/ActionCreator";
import TextField from "./TextField";
import * as Yup from "yup";
import "yup-phone";
import { useLocalStorageState } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import TextError from "./TextError";
import UserState from "../interface/UserState";
import User from "../interface/User";

import { useEffect } from "react";
// import { initialValue } from "../redux/userReducer";
// const initialValuess: UserState = {
//   user: {
//     photo: null,
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmpassword: "",
//   },
// };

interface SignUpProps {
  INITIAL_VALUES: any;
}
function SignUp({ INITIAL_VALUES }: SignUpProps) {
  const { getItem, setItem, removeItem } = useLocalStorageState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector<UserState, User>((state) => state.user);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    phone: Yup.string().phone("IN", true).required("Phone No. is Required"),
    photo: Yup.mixed()
      .nullable()
      .required("Profile Pic is mandatory")
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
    // confirmpassword: Yup.string()
    //   .required("Password is Required")
    //   .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  useEffect(() => {
    const userData = JSON.parse(getItem("UserProfile")!);
    dispatch(userActionCreator(userData));
  }, []);
  const onSubmit = (values: User) => {
    if (values.photo) {
      dispatch(
        userActionCreator({
          user: {
            ...values,
            photo: URL.createObjectURL(values.photo as Blob | MediaSource),
          },
          isSubmitting: true,
        })
      );
    }
    setItem(
      "UserProfile",
      JSON.stringify({
        user: {
          ...values,
          photo: URL.createObjectURL(values.photo as Blob | MediaSource),
        },
        isSubmitting: true,
      })
    );
    // dispatch(
    // userActionCreator(JSON.parse(getItem("UserProfile")!)))
    // localStorage.setItem("User-Profile", JSON.stringify(userData));
    // localStorage.setItem("Email",values.email)
    // localStorage.setItem("Phone",values.phone)
    // localStorage.setItem("Password",values.password)
    // localStorage.setItem("Confirm-Password",values.confirmpassword)
    // localStorage.setItem("Profile-Pic",JSON.stringify(values.photo) )

    navigate("/home");
  };

  // const INITIAL_VALUES = userData;
  // const [initialValues, handleUpdateForm] = useLocalStorageState({
  //   key: LOCAL_STORAGE_KEY,
  //   value: INITIAL_VALUES,
  // });
  // useEffect(() => {
  //   setItem("UserProfile", JSON.stringify(userData));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const resetValues = {
    user: {
      photo: null,
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
    },
  };
  const handleReset = ({ resetForm }: any) => {
    removeItem("UserProfile");

    // dispatch(
    //   userActionLogOut({

    //     user: JSON.parse(getItem("UserProfile")),
    //     isSubmitting: false,
    //   })
    // );
    resetForm();
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={userData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ isSubmitting, isValid, setFieldValue, values, resetForm }) => (
          <div className={css["flex-form"]}>
            <div className={css["custom-form"]}>
              {/* <CustomForm
                initialValues={initialValues}
                isSubmitting={isSubmitting}
                isValid={isValid}
                setFieldValue={setFieldValue}
                values={values}
                resetForm={resetForm}
                INITIAL_VALUES={INITIAL_VALUES}
                saveForm={handleUpdateForm}
              /> */}
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
                        const file = event.currentTarget.files![0];

                        setFieldValue("photo", file);
                      }}
                      value={undefined}
                      type={"file"}
                      name="photo"
                      id={css["upload-photo"]}
                    />
                    <p>{(values.photo as File)?.name}</p>
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
                  >
                    Submit
                  </button>
                  <button
                    className={`${css["reset-button"]} btn btn-danger`}
                    type="reset"
                    onClick={handleReset.bind(null, resetForm)}
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
