import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// eslint-disable-next-line
import useResizeObserver from 'use-resize-observer';

const Image = ({ image, handlePan, handleTouch }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  const { ref } = useResizeObserver({
    onResize: () => {
      setWindowHeight(window.innerHeight);
    },
  });

  return (
    <StyledImageWrapper
      ref={ref}
      style={{ height: windowHeight }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.33 }}
      onPan={handlePan}
      onTap={handleTouch}
    >
      <StyledImage>
        <Img fluid={image} loading="eager" />
      </StyledImage>
    </StyledImageWrapper>
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
  handleTouch: PropTypes.func,
};

export default Image;
