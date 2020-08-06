import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Char from './Char';

const VariableText = styled.div.attrs((props) => ({
  style: { fontSize: `${props.fontSize}px` },
}))`
  font-family: 'Compressa VF';
  text-rendering: optimizeSpeed;
  color: #d11b3d;
  display: inline;
  user-select: none;
  margin: 0 auto;
  text-transform: uppercase;
`;

const Text = ({
  text,
  isScale,
  isFlex,
  isAlpha,
  isStroke,
  isWidth,
  isWeight,
  isItalic,
}) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [fontSize, setFontSize] = useState();

  const el = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth / (text.length / 1.6));
      setWidth(el.current.offsetWidth);
      setHeight(el.current.offsetHeight);
    };
    handleResize();
    window.addEventListener('resize', () => {
      handleResize();
    });
    return () => {
      window.removeEventListener('resize', () => {
        handleResize();
      });
    };
  });

  const handleMouseMove = (event) => {
    setCursor({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <VariableText
        ref={el}
        fontSize={fontSize}
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
      </VariableText>
      <p>{`Cursor position: x: ${cursor.x}, y: ${cursor.y}`}</p>
      <p>{`StringWidth: ${width}`}</p>
      <p>{`StringHeight: ${height}`}</p>
      <p>{`FontSize: ${fontSize}`}</p>
      <p>{`WindowSize: ${window.innerWidth}`}</p>
      <p>{`TextLength: ${text.length}`}</p>
    </>
  );
};

export default Text;
