import type { AppProps } from "next/app";
import Router from "next/router";
import { useEffect } from "react";

import Home from ".";
import KanbanBoard from "./kanban";
import SignIn from "./signin";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const handleRouteChange = (url: string) => {
    // Handle route change here, if needed
  };

  useEffect(() => {
    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  let pageContent;
  switch (Component) {
    case Home:
      pageContent = <Home {...pageProps} />;

      break;

    case SignIn:
      pageContent = <SignIn {...pageProps} />;

      break;

    case KanbanBoard:
      pageContent = <KanbanBoard {...pageProps} />;

      break;

    default:
      pageContent = <Component {...pageProps} />;
  }

  return <>{pageContent}</>;
};

export default App;
