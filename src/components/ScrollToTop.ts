import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

function ScrollToTop({ pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0 as number, 0 as number);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return () => {
    pageProps;
  };
}

export default ScrollToTop;
