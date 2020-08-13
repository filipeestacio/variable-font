import React, { useRef, useEffect, useState } from 'react';
import { StyledChar } from './Char.styled';

export const Char = ({
  char,
  cursor,
  maxDist,
  isAlpha,
  isWeight,
  isWidth,
  isItalic,
}) => {
  const [dist, setDist] = useState(10);
  const [alpha, setAlpha] = useState(1);
  const [weight, setWeight] = useState('300');
  const [width, setWidth] = useState('');
  const [italic, setItalic] = useState(0);

  const elChar = useRef();

  useEffect(() => {
    const getDist = (a, b) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;

      return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    };
    setDist(
      getDist(cursor, {
        x: elChar.current.offsetLeft + elChar.current.offsetWidth / 2,
        y: elChar.current.offsetTop + elChar.current.offsetHeight / 2,
      })
    );
  }, [cursor]);

  useEffect(() => {
    const getAttr = (dist, min, max) => {
      const wght = max - Math.abs((max * dist) / maxDist);
      return Math.max(min, wght + min);
    };
    setAlpha(isAlpha ? getAttr(dist, 0.1, 1).toFixed(2) : 1);
    setWeight((isWeight ? getAttr(dist, 100, 800) : 400).toString());
    setWidth((isWidth ? getAttr(dist, 5, 200) : 100).toString());
    setItalic(isItalic ? getAttr(dist, 0, 30).toFixed(2) : 0);
  }, [dist, isAlpha, maxDist, isWeight, isWidth, isItalic]);

  return (
    <StyledChar
      ref={elChar}
      alpha={alpha}
      weight={weight}
      width={width}
      italic={italic}
    >
      {char}
    </StyledChar>
  );
};
