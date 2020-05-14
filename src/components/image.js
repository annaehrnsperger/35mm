import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Image = ({ image }) => (
  <AnimatePresence>
    <StyledImageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <StyledImage>
        <Img fluid={image} loading="eager" />
      </StyledImage>
    </StyledImageWrapper>
  </AnimatePresence>
);

const StyledImageWrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: var(--pink);
  position: absolute;
`;

const StyledImage = styled.div`
  width: 50vw;
  margin: auto;
  @media (max-width: 1024px) {
    width: 75vw;
  }
`;

Image.propTypes = {
  image: PropTypes.object,
};

export default Image;
