import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

const StyledChar = styled(animated.div)`
  display: inline;
  opacity: ${(props) => props.alpha};
  font-weight: ${(props) => props.weight};
`;

const Char = ({ char, cursor, maxDist, isAlpha, isWeight }) => {
  const [dist, setDist] = useState(10);
  const [alpha, setAlpha] = useState(1);
  const [weight, setWeight] = useState('300');

  const elChar = useRef(null);

  useEffect(() => {
    const getDist = (a, b) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;

      return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    };
    setDist(
      getDist(cursor, {
        x: elChar.current.offsetLeft + elChar.current.offsetWidth / 1.75,
        y: elChar.current.offsetTop,
      })
    );
  }, [cursor]);

  useEffect(() => {
    const getAttr = (dist, min, max) => {
      const wght = max - Math.abs((max * dist) / maxDist);
      return Math.max(min, wght + min);
    };
    setAlpha(isAlpha ? getAttr(dist, 0, 1).toFixed(2) : 1);
    setWeight(isWeight ? getAttr(dist, 100, 800) : 400);
  }, [dist, isAlpha, maxDist, isWeight]);

  return (
    <StyledChar ref={elChar} alpha={alpha} weight={weight}>
      {char}
    </StyledChar>
  );
};

export default Char;
