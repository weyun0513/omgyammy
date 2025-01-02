import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../Recoil/User/useLoginState";
import { useToastState } from "../Recoil/Error/useToastState";
import { useLoadingState } from "../Recoil/Loading/useLoadingState";

function LoginForm() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoginState();
  const { setToastMsg } = useToastState();
  const { setIsLoading } = useLoadingState();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(254, "Email must be less than 254 characters.")
        .email("Invalid email address.")
        .required("This field is required."),
      password: Yup.string()
        .max(128, "Password must be less than 128 characters.")
        .min(6, "Password must be more than 6 characters.")
        .required("This field is required."),
    }),
    validateOnChange: validateAfterSubmit,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      await axios
        .post(`${import.meta.env.VITE_BASE_URL}/user/login`, values)
        .then((resp) => {
          localStorage.setItem("access-token", resp.data.user.token);
          resetForm();
          setIsLoggedIn(true);
          setToastMsg({
            isError: false,
            message: "You have successfully logged in.",
          });
          navigate("/user");
        })
        .catch((err) => {
          setToastMsg({ isError: true, message: err.response.data.message });
        })
        .finally(() => setIsLoading(false));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      className={`flex flex-col ${
        Object.keys(formik.errors).length > 0 ? "gap-2.5" : "gap-4"
      }`}
      noValidate
    >
      {formik.errors.email ? (
        <small className="text-xs text-red-500">{formik.errors.email}</small>
      ) : null}
      <InputField
        label="E-mail"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        className={`${
          formik.errors.email
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      {formik.errors.password ? (
        <small className="text-xs text-red-500">{formik.errors.password}</small>
      ) : null}
      <InputField
        label="Şifre"
        name="password"
        value={formik.values.password}
        type="password"
        onChange={formik.handleChange}
        className={`${
          formik.errors.password
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      <div className="w-full">
        <Button
          name="Giriş"
          onClick={() => {
            setValidateAfterSubmit(true);
          }}
        />
      </div>
    </form>
  );
}

export default LoginForm;
