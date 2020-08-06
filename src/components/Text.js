import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Char from './Char';

const VariableText = styled.div.attrs(
  ({ fontSize, scaleY, lineHeight, isScale }) => ({
    style: isScale
      ? {
          fontSize: `${fontSize}px`,
          transform: `scale(1,${scaleY})`,
          lineHeight: `${lineHeight}em`,
        }
      : {
          fontSize: `${fontSize}px`,
        },
  })
)`
  font-family: 'Compressa VF';
  text-rendering: optimizeSpeed;
  color: #d11b3d;
  display: inline-block;
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
  const [fontSize, setFontSize] = useState(
    window.innerWidth / (text.length / 1.6)
  );
  const [scaleY, setScaleY] = useState(
    (window.innerHeight / height).toFixed(2)
  );
  const [lineHeight, setLineHeight] = useState(scaleY * 0.8);

  const el = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth / (text.length / 1.6));
      setWidth(el.current.offsetWidth);
      setHeight(el.current.offsetHeight);
      setScaleY((window.innerHeight / height).toFixed(2));
      setLineHeight(scaleY * 0.8);
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
  }, [width]);

  const handleMouseMove = (event) => {
    setCursor({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      <VariableText
        ref={el}
        fontSize={fontSize}
        scaleY={scaleY}
        lineHeight={lineHeight}
        isScale={isScale}
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
      <p>{`ScaleY: ${scaleY}`}</p>
      <p>{`isScale: ${isScale}`}</p>
    </>
  );
};

export default Text;
