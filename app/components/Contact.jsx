'use client';
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from 'react-icons/rx';
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
  emailjs.init(process.env.VITE_EMAILJS_PUBLIC_KEY);

  const responseObj = {
    0: '',
    1: <FormSuccess />,
    2: <FormFailure />,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.VITE_EMAILJS_SERVICE_ID,
        process.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.VITE_EMAILJS_PUBLIC_KEY
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
            rows={4}
            value={formData.message || ''}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.submit}>
            SUBMIT
          </button>
          <div className="form-result">{responseObj[response]}</div>
        </form>
      </div>
      {/* <div className="socials-wrapper">
            <div className="socials">
              <div className="icons">
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/jamesyuill/"
                  target="_blank"
                >
                  <RxLinkedinLogo size={40} />
                </a>
                <a
                  className="icon-link"
                  href="http://www.instagram.com/reanimatedgif"
                  target="_blank"
                >
                  <RxInstagramLogo size={40} />
                </a>
                <a
                  className="icon-link"
                  href="http://www.twitter.com/jamesyuill"
                  target="_blank"
                >
                  <RxTwitterLogo size={35} />
                </a>
                <a
                  className="icon-link"
                  href="http://github.com/jamesyuill"
                  target="_blank"
                >
                  <RxGithubLogo size={35} />
                </a>
              </div> */}
    </>
  );
}
