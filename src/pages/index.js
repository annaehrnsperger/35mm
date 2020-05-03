import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <article>
      <header>
        <h2>Index Page</h2>
        <p>This is my index page.</p>
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
    <Link to="/about/">About Page</Link>
  </Layout>
);

export default IndexPage;
