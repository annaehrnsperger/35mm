import React, { useState } from 'react';
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
              ...GatsbyImageSharpFluid_withWebp
            }
            id
          }
        }
      }
    }
  `);
  const { edges } = data.allImageSharp;
  const images = edges.map(edge => edge.node.fluid);
  const lastImage = images.length - 1;

  const [current, setCurrent] = useState(lastImage);

  const handleScroll = e => {
    const direction = e.deltaY;

    if (direction > 0) {
      return current === 0 ? setCurrent(lastImage) : setCurrent(current - 1);
    }
    return current === lastImage ? setCurrent(0) : setCurrent(current + 1);
  };
  const handleNext = () =>
    current === 0 ? setCurrent(lastImage) : setCurrent(current - 1);

  const handlePrev = () =>
    current === lastImage ? setCurrent(0) : setCurrent(current + 1);

  const handlePan = (e, info) =>
    info.offset.x > 0 || info.offset.y > 0 ? handlePrev() : handleNext();

  const handleTouch = () => handleNext();
  return (
    <Layout>
      <StyledSlider onWheel={handleScroll}>
        <button type="button" className="prev" onClick={handlePrev}>
          ↑
        </button>
        <Image
          key={current}
          image={edges[current].node.fluid}
          handlePan={handlePan}
          handleTouch={handleTouch}
        />
        <button type="button" className="next" onClick={handleNext}>
          ↓
        </button>
      </StyledSlider>
    </Layout>
  );
};

const StyledSlider = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  .next {
    position: fixed;
    bottom: 0;
  }
  button {
    z-index: 100;
    width: 100vw;
    height: 5vw;
    text-align: center;
    @media (max-width: 1024px) {
      height: 20vw;
    }
  }
`;

export default IndexPage;
