import React, { useState } from "react";
import styles from "./Contact.module.scss";
import cn from "classnames";
import { isEmail, isRequired } from "../../lib/validation/rules";
import { createValidator } from "../../lib/validation/validators";
import { useFormik } from "formik";
import Button from "../../lib/Button/Button";
import axios from "axios";
import Icon from "../../lib/Icon/Icon";
import ReactMarkdown from "react-markdown";
import Dialog from "../../lib/Dialog/Dialog";
export type ContactProps = {
  title: string;
  subtitle: string;
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
  title,
  subtitle,
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
    <div className={styles.contactSpacer} id={"contact"}>
      <div className={styles.contactContainer}>
        <div className={cn(`grid`, styles.grid)}>
          <div
            className={`col-12 col-start-md-4 col-end-md-9 col-start-lg-4 col-end-lg-9 `}
          >
            <h2>
              <ReactMarkdown
                className={cn(`fadeInUp`, styles.headline)}
                components={{ p: "span" }}
              >
                {title}
              </ReactMarkdown>
            </h2>

            <ReactMarkdown className={cn(`fadeInUp`, styles.subtitle)}>
              {subtitle}
            </ReactMarkdown>
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
              <div className={styles.inputWrap}>
                <p className={cn(styles.error, "small")}>
                  {getVisibleError(formik, "name")}
                </p>

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
              </div>

              <div className={styles.inputWrap}>
                <p className={cn(styles.error, "small")}>
                  {getVisibleError(formik, "email")}
                </p>
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
              </div>

              <div className={styles.areaWrap}>
                <p className={cn(styles.error, "small")}>
                  {getVisibleError(formik, "message")}
                </p>
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
              </div>

              <Button
                label={contactForm.ctaLabel}
                type="submit"
                className={cn(styles.cta, "fadeInUp")}
                disabled={loading || !formik.isValid || !formik.dirty}
                secondary
              />
            </form>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className="grid">
            <div className={"col-12 col-md-6"}>
              <a
                className={styles.footerItem}
                href={linkedin}
                rel="noopener"
                target="_blank"
              >
                <Icon icon="linkedin" className={styles.footerIcon} />
                <p className="small">{"Linkedin"}</p>
              </a>
              <div className={styles.footerItem}>
                <Icon icon="phone" className={styles.footerIcon} />
                <p className="small">{phone}</p>
              </div>
              <div className={styles.footerItem}>
                <Icon icon="location" className={styles.footerIcon} />
                <p className="small">{address}</p>
              </div>
            </div>
            <div className={"col-12 col-md-6"}>
              <p className={styles.rights}>
                © Copyright 2021 Knots. All rights reserved.
              </p>
              <p className={styles.rights}>
                Designed and built by{" "}
                <a
                  href="https://tommasolaterza.io"
                  rel="noopener"
                  target="_blank"
                >
                  Tommaso Laterza
                </a>
              </p>
            </div>
          </div>
        </footer>

        <Dialog active={messageSent} onClose={() => setMessageSent(false)}>
          <div className={styles.dialogContainer}>
            <ReactMarkdown>{contactForm.confirmationMessage}</ReactMarkdown>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Contact;
