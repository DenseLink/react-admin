import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { Dispatch, FC, ReactElement, SetStateAction } from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import packageJson from '../package.json';

const GlobalStyle = createGlobalStyle`
   *,
  *::before,
  *::after {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  ol,
  ul {
    list-style: none;
  }
`;

const defaultTheme = {
  colors: {
    primary: '#2e248d',
    window: '#808080'
  }
};

type DefaultTheme = {
  colors: {
    primary: string;
  };
};

type Themes = {
  [key: string]: DefaultTheme;
};

const themes: Themes = { defaultTheme };

type SessionContextState = {
  themeName: string;
  setThemeName: Dispatch<SetStateAction<string>>;
};

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');

  return {
    themeName,
    setThemeName
  };
};

const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: React.Consumer<T>;
  Provider: React.FC;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const { Consumer, Provider } = createContext(initialContextState);
  const ProcessProvider: React.FC = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: ProcessProvider };
};

const { Consumer, Provider } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

const SessionConsumer = Consumer;

const SessionProvider = Provider;

const StyledApp: FC = ({ children }) => (
  <>
    <SessionConsumer>
      {({ themeName }) => (
        <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
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

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <SessionProvider>
      <StyledApp>
        <Metadata
          description={packageJson.name}
          title={packageJson.description}
        />
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </>
);

export default App;
