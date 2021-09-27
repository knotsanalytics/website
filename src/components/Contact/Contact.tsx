import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.scss";
import ReactMarkdown from "react-markdown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import cn from "classnames";
import { isEmail, isRequired } from "../../lib/validation/rules";
import { createValidator } from "../../lib/validation/validators";
import { useFormik } from "formik";
import Button from "../../lib/Button/Button";
import axios from "axios";

// export type MissionProps = {
//   title: string;
//   subtitle: string;
//   members: Array<{
//     fullName: string;
//     role: string;
//     picture: string;
//     bio: string;
//   }>;
// };

export type ContactProps = {};

const mockData = {
  eyebrow: "Say Hi",
  title: "Get In touch",
  formNameLabel: "Your Name",
  formEmailLabel: "Your Email",
  formMessageLabel: "Your Message",
  formCtaLabel: "Submit",
  email: "something@gmail.com",
  address: "5 Rue Pavillon,\n13001 Marseille, France",
  phone: "+39 3207483892",
  linkedin: "#",
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

const Contact: React.FC<ContactProps> = ({}) => {
  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "/.netlify/functions/send-contact-email",
          {
            contactName: formik.values.name,
            contactEmail: formik.values.email,
            contactMessage: formik.values.message,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        formik.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
    validate,
  });

  return (
    <div className={styles.contactContainer}>
      <div className={cn(`grid`, styles.grid)}>
        <div
          className={`col-12 col-start-md-2 col-end-md-7 col-start-lg-2 col-end-lg-6 ${styles.eyebrowRow}`}
        >
          <h3 className={styles.eyebrow}>{mockData.eyebrow}</h3>
          <div className={styles.separator}></div>
        </div>
        <div
          className={`col-12 col-start-md-2 col-end-md-7 col-start-lg-2 col-end-lg-6`}
        >
          <h2 className={styles.headline}>{mockData.title}</h2>
        </div>
        <div
          className={`col-12 col-start-md-2 col-end-md-6 col-start-lg-2 col-end-lg-6`}
        >
          <div className={styles.card}>
            <form
              id="contact-form"
              className={styles.form}
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
              action="#"
              method="POST"
            >
              <label htmlFor="name" className={``}>
                {mockData.formNameLabel}
                <span className={styles.error}>
                  {getVisibleError(formik, "name")}
                </span>
              </label>
              <input
                type="text"
                className={`${styles.formControl} `}
                id={"name"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                name={"name"}
              />

              <label htmlFor="email" className={`fade-in-up`}>
                {mockData.formEmailLabel}
                <span className={styles.error}>
                  {getVisibleError(formik, "email")}
                </span>
              </label>
              <input
                type="email"
                className={`${styles.formControl} fade-in-up`}
                id={"email"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name={"email"}
              />

              <label htmlFor="message" className={``}>
                {mockData.formMessageLabel}
                <span className={styles.error}>
                  {getVisibleError(formik, "message")}
                </span>
              </label>
              <textarea
                className={`${styles.formControl} `}
                id={"message"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                name={"message"}
              />

              <Button
                label={mockData.formCtaLabel}
                type="submit"
                className={styles.cta}
              />
            </form>
          </div>
        </div>
        <div
          className={`${styles.itemsCol} col-12 col-start-md-8 col-end-md-12 col-start-lg-9 col-end-lg-12`}
        >
          <label>Phone Number</label>
          <p className={styles.phone}>{mockData.phone}</p>
          <label>Email</label>
          <p className={styles.mail}>{mockData.email}</p>
          <label>Linkedin</label>
          <a
            target="_blank"
            href={mockData.linkedin}
            className={styles.linkedin}
          >
            linkedin/knots.com
          </a>
          <label>Address</label>
          <p className={styles.address}>{mockData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
