import React, { useState, useRef, useEffect } from 'react';
import VariableFont from './fonts/fonts';
import { StyledText } from './VariableText.styled';
import { Char } from './char';

export const VariableText = ({
  text,
  isScale,
  isFlex,
  isAlpha,
  isWidth,
  isWeight,
  isItalic,
}) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState();
  const [textHeight, setTextHeight] = useState();
  const [fontSize, setFontSize] = useState(
    window.innerWidth / (text.length / 1.6)
  );
  const [scaleY, setScaleY] = useState((windowHeight / textHeight).toFixed(2));
  const [lineHeight, setLineHeight] = useState(scaleY * 0.8);

  const el = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', () => {
      handleResize();
    });
    return () => {
      window.removeEventListener('resize', () => {
        handleResize();
      });
    };
  });

  useEffect(() => {
    setFontSize(windowWidth / (text.length / 1.6));
  }, [windowWidth, text.length]);

  useEffect(() => {
    setWidth(el.current.offsetWidth);
  }, []);

  useEffect(() => {
    setTextHeight(el.current.offsetHeight);
  }, []);

  useEffect(() => {
    setScaleY((windowHeight / textHeight).toFixed(2));
  }, [windowHeight, textHeight]);

  useEffect(() => {
    setLineHeight(scaleY * 0.8);
  }, [scaleY]);

  const handleMouseMove = (event) => {
    setCursor({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <VariableFont />
      <StyledText
        ref={el}
        fontSize={fontSize}
        scaleY={scaleY}
        lineHeight={lineHeight}
        isScale={isScale}
        isFlex={isFlex}
        onMouseMove={(event) => {
          handleMouseMove(event);
        }}
      >
        {text.split('').map((char, i) => (
          <Char
            char={char}
            key={i}
            cursor={cursor}
            maxDist={width / 2}
            isWeight={isWeight}
            isWidth={isWidth}
            isItalic={isItalic}
            isAlpha={isAlpha}
          ></Char>
        ))}
      </StyledText>
    </>
  );
};
