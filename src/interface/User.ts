export default interface User {
    photo: string|File |Blob| null;
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmpassword: string;
  }
  