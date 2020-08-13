import styled from 'styled-components';

export const StyledChar = styled.div.attrs((props) => ({
  style: {
    opacity: props.alpha,
    fontWeight: props.weight,
    fontStretch: `${props.width}%`,
    fontStyle: `oblique ${props.italic}deg`,
  },
}))`
  display: inline;
`;
