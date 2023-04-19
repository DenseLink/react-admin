import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Component {...pageProps} />
);

export default App;
