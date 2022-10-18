import React from "react";
import Head from "next/head";

import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { navigationMock } from "models/Navigation/NavigationMock";

import "./Layout.module.scss";

export const siteTitle = "Next.js Sample Website";

export const Layout: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = React.useState(0);

  const onScroll = React.useCallback((event) => {
    setScrollY(Number(document.body.scrollTop));
    if (Number(document.body.scrollTop) > 0) {
      document.body.classList.add("scrolling");
    } else {
      document.body.classList.remove("scrolling");
    }
  }, []);

  React.useEffect(() => {
    document.body.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <title>Dom Paul Creative</title>
      </Head>
      <main>
        <NavBar options={navigationMock} naked={scrollY === 0} />

        <div className="main-content">{children}</div>
      </main>
      <Footer
        text="Copyright 2022. Dom Paul Creative"
        color="dark"
        email="hello@dompaulcreative.com"
        phone="07933426346"
      />
    </>
  );
};
