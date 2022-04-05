import * as Yup from "yup";
import "yup-phone";
export const ValidationSchema = Yup.object().shape({
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
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, Lowercase, Number and a special case"
      )
      .required("Password is Required"),
    confirmpassword: Yup.string()
      .required("Password is Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
