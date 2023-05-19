import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useWindowSize } from "hooks";
import { GetAllPosts } from "utils/posts";
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
  const posts = GetAllPosts();
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
      return toast(<P>{posts.newsletterToastTitle}</P>);
    } else {
      console.error('Error sending email');
      return toast(<P>{posts.toastError}</P>);
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
          <P className={styles.title}>{posts.newsletterTitle}</P>
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
            <Toaster />
          </form>
          <P className={styles.text}>{posts.subscribingTitle}</P>
        </div>
        <div className={styles.copyright}>
          <Copyright
            posts={posts}
          />
          <div className={styles.terms}>
            <PrivacyPolicy
              posts={posts}
            />
            <TermsConditions
              posts={posts}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};
