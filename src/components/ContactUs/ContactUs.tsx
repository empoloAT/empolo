import { useForm } from "react-hook-form";
import { useWindowSize } from "hooks";
import {
  Button,
  Container,
  H2,
  P,
  Input,
  Textarea,
  Contacts
} from "components";

import styles from "./contactUs.module.scss";

interface IForm {
  name: string;
  email: string;
  message: string;
};

export const ContactUS = () => {
  const { control, handleSubmit: validateBeforeSubmit } = useForm<IForm>({});
  const { isLaptopS } = useWindowSize();

  const handleSubmit = async ({ name, email, message }: IForm) => {
    const res = await fetch("/api/email", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      const responseJson = await res.json();
      console.log(responseJson);
    } else {
      console.error('Error sending email');
    }
  };

  return (
    <section id="contact-us" className={styles.component}>
      <Container className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <H2 className={styles.mainTitle}>Contact Us</H2>
          <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
              <P className={styles.subtitle}>Want to discuss your project?</P>
              <form action="POST" onSubmit={validateBeforeSubmit(handleSubmit)}>
                <Input
                  name="name"
                  placeholder="Name"
                  inputType="opened"
                  control={control}
                  className={styles.input}
                />
                <Input
                  name="email"
                  placeholder="E-mail"
                  inputType="opened"
                  control={control}
                  className={styles.input}
                />
                <Textarea
                  name="message"
                  placeholder="Message"
                  control={control}
                />
                <Button
                  className={styles.button}
                  size="m"
                >
                  Send Message
                </Button>
              </form>
            </div>
            {!isLaptopS &&
              <div className={styles.contentContainer}>
                <Contacts />
              </div>
            }
          </div>
        </div>
      </Container>
    </section>
  );
};
