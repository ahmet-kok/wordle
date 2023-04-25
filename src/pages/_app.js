import "@/styles/globals.css";
import "@/styles/wordle.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  //#202024
  return( 
  <>
  <Component {...pageProps} />
  <Analytics />
  </>
  );
}
