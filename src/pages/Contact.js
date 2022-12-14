import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Shangeeth via email @ shanshangeeth@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p> You can email me at: </p>
        <p>shanshangeeth@gmail.com</p>
        <p>Cell :</p>
        <p>+91 97865 87878</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
