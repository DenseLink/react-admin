import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC, ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import packageJson from '../package.json';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const themes = {
  default: {
    colors: {
    primary: '#2e248d'
  }
}
};

type Theme = {
  colors: {
    primary: string;
  };
};

type StyledAppProps = {
  theme?: Theme;
};

const StyledApp: FC<StyledAppProps> = ({children, theme = themes.default}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

StyledApp.defaultProps = {
  theme: themes.default
};


type MetadataProps = {
  description?: string;
  title?: string;
};

const Metadata: FC<MetadataProps> = ({
  description = packageJson.description,
  title = packageJson.name
}) => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);
Metadata.defaultProps = {
  description: packageJson.description,
  title: packageJson.description
};

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Metadata />
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}
