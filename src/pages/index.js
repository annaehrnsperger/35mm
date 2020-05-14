import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Image from '../components/image';
import Layout from '../components/layout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Images {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 3600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
            id
          }
        }
      }
    }
  `);

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => setWindowHeight(window.innerHeight), []);

  const { edges } = data.allImageSharp;
  const images = edges.map(edge => edge.node.fluid);
  const lastImage = images.length - 1;

  const [current, setCurrent] = useState(lastImage);

  const delay = 150;

  const handleScroll = e => {
    const direction = e.deltaY;

    if (direction > 0) {
      return current === 0
        ? setTimeout(() => setCurrent(lastImage), delay)
        : setTimeout(() => setCurrent(current - 1), delay);
    }
    return current === lastImage
      ? setTimeout(() => setCurrent(0), delay)
      : setTimeout(() => setCurrent(current + 1), delay);
  };

  const handleNext = () =>
    current === 0 ? setCurrent(lastImage) : setCurrent(current - 1);

  const handlePrev = () =>
    current === lastImage ? setCurrent(0) : setCurrent(current + 1);

  return (
    <Layout>
      <StyledSlider
        style={{ height: windowHeight }}
        onWheel={handleScroll}
        onTouchStart={handleNext}
      >
        <StyledControls>
          <button type="button" className="prev" onClick={handlePrev}>
            ↑
          </button>
          <button type="button" className="next" onClick={handleNext}>
            ↓
          </button>
        </StyledControls>
        <Image key={current} image={edges[current].node.fluid} />
        <div hidden>
          {edges.map(edge => (
            <Image key={edge.node.id} image={edge.node.fluid} />
          ))}
        </div>
      </StyledSlider>
    </Layout>
  );
};

const StyledSlider = styled.div`
  width: 100vw;
  position: relative;
`;

const StyledControls = styled.div`
  z-index: 100;
  position: absolute;
  .next {
    position: fixed;
    bottom: 0;
  }
  button {
    width: 100vw;
    height: 5vw;
    text-align: center;
    @media (max-width: 1024px) {
      height: 20vw;
    }
  }
`;
export default IndexPage;
