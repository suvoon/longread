import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProvider95 } from '@react95/core';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import styled from 'styled-components';
import videoeot from '/font/React95Video-Numbers.eot';
import videottf from '/font/React95Video-Numbers.ttf';
import videowoff from '/font/React95Video-Numbers.woff';
import videowoff2 from '/font/React95Video-Numbers.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  @font-face {
    font-family: 'React95Video-Numbers';
    src: url('${videoeot}');
    src: url('${videowoff2}') format('woff2'),
         url('${videowoff}') format('woff'),
         url('${videottf}') format('truetype'),
         url('${videoeot}?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

const Wrapper = styled.div`
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
`;
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider95>
      <ThemeProvider theme={original}>
        <Wrapper>
          <App />
        </Wrapper>
      </ThemeProvider>
    </ThemeProvider95>
    <footer>
      <h2>Автор: Павлов Е.А. ИДМ-23-08</h2>
      <h2>Москва, 2023</h2>
    </footer>
  </React.StrictMode>,
)
