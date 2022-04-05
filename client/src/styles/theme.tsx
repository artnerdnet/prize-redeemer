import React from 'react';
import { ThemeProvider } from 'styled-components';

const colors = {
  primary: '#FF6280',
  primaryHover: '#FF9897',
  disabled: '#FFEAEE',
  secondary: '#4A4A4A',
  greg: '#B1B1B1',
  lightGrey: '#F6F9FA',
  background: '#f5f5f5',
  white: '#ffffff',
  error: '#EE4D5F',
};

const spacing = {
  space10: '10px',
  space12: '12px',
  space15: '15px',
  space24: '24px',
  space30: '30px',
  space44: '44px',
  space190: '190px',
};

const flex = {
  flow: {
    row: 'row wrap',
    column: 'column wrap'
  },
};

const size = {
  size5: '5px',
  size10: '10px',
  size20: '20px',
  size40: '40px',
  size50: '50px',
  size55: '55px',
  size60: '60px',
  size68: '68px',
  size75: '75px',
  size160: '160px',
  size225: '225px',
  size270: '270px',
  size400: '400px',
  size445: '445px',
  size550: '550px',
  size720: '720px',
};

const opacity = {
  opacity62: '62%',
  opacity100: '100%',
};

const fonts = {
  family: {
    primary: 'Avenir'
  },
  weight: {
    thin: 200,
    normal: 400,
    bold: 600,
    black: 900,
  },
  sizes: {
    small: '13px',
    medium: '16px',
    large: '18px',
    xLarge: '35px',
  },
  lineHeight: {
    small: '19px',
    medium: '22px',
    large: '43px',
  },
};

export const themeStyles = {
  colors,
  flex,
  fonts,
  size,
  opacity,
  spacing,
};

type TThemeProps = {
  children: React.ReactNode
};

const Theme:React.FunctionComponent<TThemeProps> = ({ children }) => (
  <ThemeProvider theme={themeStyles}>
    {children}
  </ThemeProvider>
);

export default Theme;
