import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>SHANGEETH S.S</h2>
        <p>
          <a href="mailto:shanshangeeth@gmail.com">shanshangeeth@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shangeeth. I like building things. I am a{' '}
        <a href="https://icme.stanford.edu/">KCT</a> graduate, Seeking an
        entry-level opportunity with an esteemed organization where I can
        utilize my skills to make life handy and enhance learning in the field
        of work .
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/" className="button">
              Home
            </Link>
          )}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
