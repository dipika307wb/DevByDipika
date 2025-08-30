import "./styles/globals.css"; // or move globals.css into src/styles
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
