import { LogRocket } from "@/components";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Revanth Ancha — Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Revanth Ancha"></meta>
        <meta
          name="description"
          content="Revanth Ancha is a Machine Learning enthusiast passionate about solving complex, data-driven problems."
        ></meta>
        <meta name="theme-color" content="#794856"></meta>
      </Head>

      <LogRocket />
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
