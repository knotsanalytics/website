import React, { useState } from "react";
import styles from "./Contact.module.scss";
import cn from "classnames";
import { isEmail, isRequired } from "../../lib/validation/rules";
import { createValidator } from "../../lib/validation/validators";
import { useFormik } from "formik";
import Button from "../../lib/Button/Button";
import axios from "axios";
import Canvas from "../canvas";

export type ContactProps = {
  eyebrow: string;
  title: string;
  email: string;
  address: string;
  linkedin: string;
  phone: string;
  contactForm: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    ctaLabel: string;
    confirmationMessage: string;
  };
};

const rules = {
  name: [[isRequired, "This field is required"]],
  email: [
    [isRequired, "This field is required"],
    [isEmail, "Invalid email address"],
  ],
  message: [[isRequired, "This field is required"]],
};

const validate = createValidator(rules);
const getVisibleError = (formik: any, fieldName: string) =>
  formik.touched[fieldName] ? formik.errors[fieldName] : "";

const Contact: React.FC<ContactProps> = ({
  eyebrow,
  title,
  email,
  address,
  linkedin,
  phone,
  contactForm,
}) => {
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "/.netlify/functions/next_email",
          {
            name: formik.values.name,
            email: formik.values.email,
            details: formik.values.message,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        formik.resetForm();
        setLoading(false);
        setMessageSent(true);
      } catch (error) {
        console.error(error);
      }
    },
    validate,
  });

  return (
    <div className={styles.contactContainer} id={"contact"}>
      <div className={cn(`grid`, styles.grid)}>
        <div
          className={`col-12 col-start-md-4 col-end-md-9 col-start-lg-4 col-end-lg-9 `}
        >
          <h2 className={cn(styles.headline, "fadeInUp")}>
            Get in <span>Touch</span>
          </h2>
          <p className={cn(" fadeInUp", styles.subtitle)}>
            Have a project for us, or just want to say hi? Feel free to send us
            an email at <span>knots.analytics@gmail.com</span> or use the form
            below.
          </p>
        </div>

        <div
          className={`col-12 col-start-md-4 col-end-md-9 col-start-lg-4 col-end-lg-9`}
        >
          <form
            id="contact-form"
            className={styles.form}
            onSubmit={formik.handleSubmit}
            encType="text/plain"
            action="#"
            method="POST"
          >
            {/* <label htmlFor="name" className={`fadeInUp`}>
              {contactForm.nameLabel}
              <span className={styles.error}>
                {getVisibleError(formik, "name")}
              </span>
            </label> */}
            <input
              type="text"
              className={`${styles.formControl} fadeInUp`}
              id={"name"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              name={"name"}
              disabled={loading}
              placeholder={contactForm.nameLabel}
            />

            {/* <label htmlFor="email" className={`fadeInUp`}>
              <span className={styles.error}>
                {getVisibleError(formik, "email")}
              </span>
            </label> */}
            <input
              type="email"
              className={`${styles.formControl} fadeInUp`}
              id={"email"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name={"email"}
              disabled={loading}
              placeholder={contactForm.emailLabel}
            />

            {/* <label htmlFor="message" className={`fadeInUp`}>
              {contactForm.messageLabel}
              <span className={styles.error}>
                {getVisibleError(formik, "message")}
              </span>
            </label> */}
            <textarea
              className={`${styles.formControl} fadeInUp`}
              id={"message"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              name={"message"}
              disabled={loading}
              placeholder={contactForm.messageLabel}
            />
            <Button
              label={contactForm.ctaLabel}
              type="submit"
              className={cn(styles.cta, "fadeInUp")}
              disabled={loading}
              secondary
            />
          </form>
        </div>
      </div>
      <div className={styles.footer}></div>
      {/* <div
        className={`col-12 col-md-4 col-start-lg-10 col-end-lg-11 ${styles.itemsCol}`}
      >
        <a
          target="_blank"
          href={linkedin}
          className={cn(styles.linkedin, "fadeInUp")}
        >
          linkedin
        </a>
        <p className={cn(styles.mail, "fadeInUp")}>{email}</p>
        <p className={cn(styles.phone, "fadeInUp")}>{phone}</p>

        <p className={cn(styles.address, "fadeInUp")}>{address}</p>
      </div>
      <div className={styles.divider}></div>
      <p className={styles.copyrights}>
        {"Copyright @2020 All rights reserved"}
      </p> */}
    </div>
  );
};

export default Contact;
