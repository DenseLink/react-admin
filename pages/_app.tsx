import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC, ReactElement } from 'react';
import { createContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import packageJson from '../package.json';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
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

type StyledAppProps = {
  currentTheme: DefaultTheme;
};

const useSessionContextState = (): SessionContextState => ({});

const initialSessionContextState = {};

const { Consumer, Provider } = createContext<SessionContextState>(
  initialSessionContextState
);

const SessionConsumer = Consumer;

const SessionProvider: FC = ({ children }) => (
  <Provider value={useSessionContextState()}>{children}</Provider>
);

const StyledApp: FC<StyledAppProps> = ({ children, currentTheme }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = currentTheme }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

StyledApp.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
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
        <StyledApp currentTheme={themes.default}>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}
