import React from "react";
import Head from "next/head";

import { Footer } from "components/layout/Footer";
import { NavBar } from "components/layout/NavBar";
import { navigationMock } from "models/Navigation";
import { footerMock } from "models/Footer";
import { layoutMock } from "models/Layout";

export const Layout: React.FC = ({ children }) => {
  const { title, description, image } = layoutMock;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="og:title" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <main>
        <NavBar options={navigationMock} naked={true} />
        <div className="main-content">{children}</div>
        <Footer {...footerMock} />
      </main>
    </>
  );
};
