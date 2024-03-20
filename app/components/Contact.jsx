'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import FormSuccess from './FormSuccess';
import FormFailure from './FormFailure';
import styles from './contact.module.css';

export default function Contact() {
  const form = useRef();
  const formResult = useRef();
  const [response, setResponse] = useState(0);
  const [formData, setFormdata] = useState({
    firstname: '',
    lastname: '',
    emailaddress: '',
    message: '',
  });
  emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

  const responseObj = {
    0: '',
    1: <FormSuccess />,
    2: <FormFailure />,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse(1);
        },
        (error) => {
          console.log(error.text);
          setResponse(2);
        }
      );

    setFormdata({
      ...formData,
      firstname: '',
      lastname: '',
      emailaddress: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <form
          className={styles.formwrapper}
          id="contact-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <label htmlFor="firstname">FIRST NAME: </label>
          <input
            className={styles.input}
            type="text"
            name="firstname"
            value={formData.firstname || ''}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastname">LAST NAME: </label>
          <input
            className={styles.input}
            type="text"
            name="lastname"
            value={formData.lastname || ''}
            onChange={handleChange}
            required
          />
          <label htmlFor="emailaddress">EMAIL: </label>
          <input
            className={styles.input}
            type="email"
            name="emailaddress"
            value={formData.emailaddress || ''}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">MESSAGE: </label>
          <textarea
            className={styles.input}
            name="message"
            maxLength={200}
            rows={4}
            value={formData.message || ''}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.submit}>
            SUBMIT
          </button>
          <div className={styles.formresult}>{responseObj[response]}</div>
        </form>
      </div>
    </>
  );
}
