import styled from 'styled-components';

export const StyledText = styled.div.attrs(
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
  display: ${(props) => (props.isFlex ? 'flex' : 'inline-block')};
  user-select: none;
  text-transform: uppercase;
  ${(props) => props.isFlex && 'justify-content: space-between'};
`;
