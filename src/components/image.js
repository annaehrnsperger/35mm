import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
// eslint-disable-next-line
import useResizeObserver from 'use-resize-observer';

const Image = ({ image, handlePan }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  const { ref } = useResizeObserver({
    onResize: () => {
      setWindowHeight(window.innerHeight);
    },
  });

  return (
    <AnimatePresence>
      <StyledImageWrapper
        ref={ref}
        style={{ height: windowHeight }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
        onPanStart={handlePan}
      >
        <StyledImage>
          <Img fluid={image} loading="eager" />
        </StyledImage>
      </StyledImageWrapper>
    </AnimatePresence>
  );
};

const StyledImageWrapper = styled(motion.div)`
  width: 100vw;
  display: flex;
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
  handlePan: PropTypes.func,
};

export default Image;
