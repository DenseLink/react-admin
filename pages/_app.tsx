// eslint-disable-next-line import/extensions
import { FileSystemProvider } from "contexts/fileSystem";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { FC, SetStateAction } from "react";
// eslint-disable-next-line import/no-duplicates
import { useState } from "react";
// eslint-disable-next-line import/no-duplicates
import { createGlobalStyle, ThemeProvider } from "styled-components";

// eslint-disable-next-line import/extensions
import contextFactory from "../contexts/contextFactory";
import packageJson from "../package.json";

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
    primary: "#2e248d",
    window: "#808080",
  },
};

type DefaultTheme = {
  colors: {
    primary: string;
  };
};

type Themes = Record<string, DefaultTheme>;

const themes: Themes = { defaultTheme };

type SessionContextState = {
  setThemeName: React.Dispatch<SetStateAction<string>>;
  themeName: string;
};

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState("");

  return { setThemeName, themeName };
};

const initialSessionContextState: SessionContextState = {
  setThemeName: () => {},
  themeName: "",
};

const { Consumer, Provider, useContext } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export const SessionConsumer = Consumer;
export const SessionProvider = Provider;
export const useSession = useContext;

const StyledApp: FC = ({ children }) => (
  <SessionConsumer>
    {({ themeName }) => (
      <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    )}
  </SessionConsumer>
);

StyledApp.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  theme: themes.default,
};

type MetadataProps = {
  description: string;
  title: string;
};

const Metadata: FC<MetadataProps> = ({ description, title }) => (
  <Head>
    <meta content={description} name="description" />
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
