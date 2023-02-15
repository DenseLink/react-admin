import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { Dispatch, FC, SetStateAction } from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
// eslint-disable-next-line import/no-duplicates
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import packageJson from '../package.json';
// eslint-disable-next-line import/extensions
import contextFactory from './contextFactory';
// eslint-disable-next-line import/extensions
import { FileSystemProvider } from './fileSystem';

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
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    user-select: none;
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

  return { themeName, setThemeName };
};

const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};

const { Consumer, Provider, useContext } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export const SessionConsumer = Consumer;
export const SessionProvider = Provider;
export const useSession = useContext;

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
  <FileSystemProvider>
    <SessionProvider>
      <StyledApp>
        <Metadata
          description={packageJson.name}
          title={packageJson.description}
        />
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  </FileSystemProvider>
);

export default App;
