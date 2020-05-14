import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Footer from './footer';
import '../styles/app.css';

const Layout = ({ children, description, lang, meta, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ].concat(meta)}
      />

      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default Layout;
