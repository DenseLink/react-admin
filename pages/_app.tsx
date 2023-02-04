import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC, ReactElement } from 'react';
import { createContext } from 'react';
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

type DefaultTheme = {
  colors: {
    primary: string;
  }
};

type SessionContextState  = {
  theme?: DefaultTheme;
};

const useSessionContextState = (): SessionContextState => ({});

const initialSessionContextState = {};

const SessionContext = createContext<SessionContextState>(
  initialSessionContextState
);

const SessionConsumer = SessionContext.Consumer;

const SessionProvider: FC = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

const StyledApp: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = themes.default }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

StyledApp.defaultProps = {
  theme: themes.default
};


type MetadataProps = {
  description: string;
  title: string;
};

const Metadata: FC<MetadataProps> = ({ description, title }) => (
  <Head>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
);

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Metadata description={packageJson.name} title={packageJson.description}/>
      <SessionProvider>
        <StyledApp>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
