import React from 'react';
import graphql from 'gatsby';
import Layout from '../components/layout';

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>Post Template {data.title}</h1>
    <p> Post Content {data.content}</p>
  </Layout>
);

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
    }
  }
`;
