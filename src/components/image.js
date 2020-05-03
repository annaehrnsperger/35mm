import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 3600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  // without blur
  // ...GatsbyImageSharpFluid_noBase64

  return <Img fluid={file.childImageSharp.fluid} />;
};

export default Image;
