import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A beautiful, responsive react application written with modern
            Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. You can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
