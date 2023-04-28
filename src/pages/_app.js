import "@/styles/globals.css";
import "@/styles/wordle.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../../components/layout/Layout";

export default function App({ Component, pageProps }) {
  //#202024
  return( 
  <>
  <Layout>
    <Component {...pageProps} />
  </Layout>

  <Analytics />
  </>
  );
}
