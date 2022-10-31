import React from "react";
import axios from "axios";
import cn from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Input } from "../Input";

import styles from "./SignUpForm.module.scss";

type variant = "3" | "2" | "1";

interface SignUpFormValues {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message?: string;
}

interface SignUpFormProps {
  variant?: variant;
}

const TOAST_CONFIG: ToastOptions = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};

export const SignUpForm: React.FC<SignUpFormProps> = ({ variant = "2" }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required("This is a required field"),
        email: Yup.string().required("This is a required field"),
        company: Yup.string(),
        phone: Yup.string(),
        message: Yup.string(),
      })
    ),
  });

  const notify = {
    success: () => toast.success("Thank you for your interest!", TOAST_CONFIG),
    error: () =>
      toast.error("Something went wrong, please try again", TOAST_CONFIG),
  };

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      setLoading(true);
      await axios.post(
        "/api/email",
        {
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      notify.success();
      reset();
    } catch {
      setLoading(false);
      notify.error();
    }
  };

  return (
    <div className={styles["sign-up-form-container"]}>
      <form
        className={cn(styles["sign-up-form"], {
          [styles[`sign-up-form--${variant}`]]: variant,
        })}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles["sign-up-form__input"])}>
              <Input
                label="Your full name"
                id={name}
                type="text"
                required
                value={value}
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.name && (
                <span className={styles["sign-up-form__input-error"]}>
                  {errors.name.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles["sign-up-form__input"])}>
              <Input
                label="Your email address"
                id={name}
                required
                value={value}
                type="text"
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.email && (
                <span className={styles["sign-up-form__input-error"]}>
                  {errors.email.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles["sign-up-form__input"])}>
              <Input
                label="Your phone number"
                id={name}
                value={value}
                type="text"
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.phone && (
                <span className={styles["sign-up-form__input-error"]}>
                  {errors.phone.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="company"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles["sign-up-form__input"])}>
              <Input
                label="Company name"
                id={name}
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.company && (
                <span className={styles["sign-up-form__input-error"]}>
                  {errors.company.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div
              className={cn(
                styles["sign-up-form__input"],
                styles["sign-up-form__input--textarea"]
              )}
            >
              <Input
                label="Message"
                id={name}
                value={value}
                textArea={true}
                type="text"
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.message && (
                <span className={styles["sign-up-form__input-error"]}>
                  {errors.message.message}
                </span>
              )}
            </div>
          )}
        />
        <button type="submit" className={styles["sign-up-form__submit"]}>
          {loading ? <CircularProgress size="30px" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};
