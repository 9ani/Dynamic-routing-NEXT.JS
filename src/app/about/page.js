import React from 'react';
import Header from '../../components/layouts/header';
import Footer from "../../components/layouts/footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold">About Us</h2>
      </div>
      <Footer />

    </div>
  );
};

export default About;
