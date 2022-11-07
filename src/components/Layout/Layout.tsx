import React from "react";
import Head from "next/head";

import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { navigationMock } from "models/Navigation/NavigationMock";

import "./Layout.module.scss";

export const siteTitle = "Dom Paul Creative";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I am a web designer and developer based in Hertfordshire who has spent the last 7 years building exciting digital experiences."
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
        <title>{siteTitle}</title>
      </Head>
      <main>
        <NavBar options={navigationMock} naked={true} />
        <div className="main-content">{children}</div>
        <Footer
          text="Copyright 2022. Dom Paul Creative"
          color="dark"
          email="hello@dompaulcreative.com"
          phone="+44 7933426346"
        />
      </main>
    </>
  );
};
