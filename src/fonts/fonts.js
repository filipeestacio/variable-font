import { createGlobalStyle } from 'styled-components';

import CompressaPro from './CompressaPRO.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Compressa VF';
    src: local('Compressa VF'), local('CompressaVF'), url(${CompressaPro}) format('woff2');
    font-weight: 100 800;
    font-style: normal;
  }
`;
