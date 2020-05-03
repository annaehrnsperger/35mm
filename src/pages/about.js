import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <article>
      <header>
        <h2>About Page</h2>
        <p>This is my about page.</p>
        <Link to="/">Back Home</Link>
      </header>
      <section>
        <header>{/* <h3></h3> */}</header>
        <p></p>
      </section>
      <section>
        <header>{/* <h3></h3> */}</header>
        <p></p>
      </section>
    </article>
  </Layout>
);

export default AboutPage;
