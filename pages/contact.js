import Head from 'next/head';
import { Fragment } from 'react';
import ContactForm from '../components/contact/contact-form';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>contact Me</title>
        <meta name='description' content='Send me your messages' />
      </Head>
      <ContactForm />;
    </Fragment>
  );
};
export default ContactPage;
