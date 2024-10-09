"use client";

import React from "react";
import Head from "next/head";
import Navbar from "../../../app/Components/Navbar";
import ArticleContent from "../Components/ArticleContent";
import Footer from "../../../app/Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Artiklar Page</title>
        <meta
          name="description"
          content="This is the Artiklar page of Vinjournalen"
        />
      </Head>
      <Navbar />
      <ArticleContent/>
      <Footer />
    </>
  );
}
