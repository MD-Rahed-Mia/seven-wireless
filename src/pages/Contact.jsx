import React from 'react'
import './../style/Contact.scss';
import Layout from "../Layout/Layout";
import ContactInfo from '../component/Contact/ContactInfo';
import PageTitle from '../component/PageTitle/PageTitle';

export default function Contact() {
  return (
    <Layout>
      <PageTitle title={"Contact"} />
      <ContactInfo />
    </Layout>
  )
}
