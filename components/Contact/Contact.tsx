import React, { useState } from "react";
import styles from "./Contact.module.scss";
import cn from "classnames";
import { isEmail, isRequired } from "../../lib/validation/rules";
import { createValidator } from "../../lib/validation/validators";
import { useFormik } from "formik";
import Button from "../../lib/Button/Button";
import axios from "axios";

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
        <div className={`col-12 col-md-6 col-start-lg-2 col-end-lg-6`}>
          <h2 className={cn(styles.headline, "fadeInUp")}>{title}</h2>
        </div>
        <div className={`col-12 col-md-6 col-start-lg-7 col-end-lg-11`}>
          <p className={cn("large fadeInUp", styles.subtitle)}>
            We are always looking for new collaborations and exciting
            opportunities. Drop us a line, we will be in touch as soon as we
            can.
          </p>
        </div>

        <div className={`col-12 col-md-8 col-start-lg-2 col-end-lg-8`}>
          <form
            id="contact-form"
            className={styles.form}
            onSubmit={formik.handleSubmit}
            encType="text/plain"
            action="#"
            method="POST"
          >
            <div className={styles.inputsWrap}>
              <label htmlFor="name" className={`fadeInUp`}>
                {contactForm.nameLabel}
                <span className={styles.error}>
                  {getVisibleError(formik, "name")}
                </span>
              </label>
              <input
                type="text"
                className={`${styles.formControl} fadeInUp`}
                id={"name"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                name={"name"}
                disabled={loading}
              />

              <label htmlFor="email" className={`fadeInUp`}>
                {contactForm.emailLabel}
                <span className={styles.error}>
                  {getVisibleError(formik, "email")}
                </span>
              </label>
              <input
                type="email"
                className={`${styles.formControl} fadeInUp`}
                id={"email"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name={"email"}
                disabled={loading}
              />
              <Button
                label={contactForm.ctaLabel}
                type="submit"
                className={cn(styles.ctaDesktop, "fadeInUp")}
                disabled={loading}
              />
            </div>
            <div className={styles.areaWrap}>
              <label htmlFor="message" className={`fadeInUp`}>
                {contactForm.messageLabel}
                <span className={styles.error}>
                  {getVisibleError(formik, "message")}
                </span>
              </label>
              <textarea
                className={`${styles.formControl} fadeInUp`}
                id={"message"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                name={"message"}
                disabled={loading}
              />
              <Button
                label={contactForm.ctaLabel}
                type="submit"
                className={cn(styles.ctaMobile, "fadeInUp")}
                disabled={loading}
              />
            </div>
          </form>
        </div>

        <div
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
      </div>
      <div className={styles.divider}></div>
      <p className={styles.copyrights}>
        {"Copyright @2020 All rights reserved"}
      </p>
    </div>
  );
};

export default Contact;
