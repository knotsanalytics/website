import "../styles/global.scss";
import type { AppProps } from "next/app";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }: AppProps) {
  const TRACKING_ID = "G-DZRSW2E4PP";
  ReactGA.initialize(TRACKING_ID);
  return <Component {...pageProps} />;
}
export default MyApp;
