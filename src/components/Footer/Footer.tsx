import { useForm } from "react-hook-form";
import { useState } from "react";
import { useWindowSize } from "hooks";
import {
  Social,
  Logo,
  Navigation,
  Container,
  Copyright,
  PrivacyPolicy,
  TermsConditions,
  P,
  Input,
  Button,
  Contacts
} from "components"

import styles from "./footer.module.scss";


interface IForm {
  email: string;
};

export const Footer = () => {
  const { control, handleSubmit: validateBeforeSubmit } = useForm<IForm>({});
  const { isLaptopS } = useWindowSize();

  const handleSubmit = async ({ email }: IForm) => {
    const res = await fetch("/api/contacts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email})
    });

    if (res.ok) {
      const responseJson = await res.json();
      console.log(responseJson);
    } else {
      console.error('Error sending email');
    }
  };

  return (
    <footer className={styles.component}>
      <Container>
        <div className={styles.navigation}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
          <Navigation
            direction="column"
            className={styles.list}
          />
          <div className={styles.socialContainer}>
            {isLaptopS &&
              <Contacts />
            }
            <Social />
          </div>
        </div>
        <div className={styles.registerContainer}>
          <P className={styles.title}>Register for Newsletter</P>
          <form className={styles.form} action="POST" onSubmit={validateBeforeSubmit(handleSubmit)}>
            <Input
              name="email"
              placeholder="Enter your email"
              inputType="closed"
              control={control}
              className={styles.input}
            />
            <Button
              className={styles.button}
              size="r"
            >
              Subscribe
            </Button>
          </form>
          <P className={styles.text}>By subscribing you agree to with our Privacy Policy</P>
        </div>
        <div className={styles.copyright}>
          <Copyright />
          <div className={styles.terms}>
            <PrivacyPolicy />
            <TermsConditions />
          </div>
        </div>
      </Container>
    </footer>
  );
};
