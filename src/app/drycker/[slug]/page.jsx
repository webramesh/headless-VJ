"use client";
import Head from "next/head";
import React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import Scrolltodown from "@/Components/Scrolltodown"
import FilterSection from "../Components/FilterSection";
import CountrySection from "../Components/CountrySection";
import Content from "../Components/Content";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta
          name="description"
          content="This is the product page of Vinjournalen"
        />
      </Head>
      <>
        <Navbar />
        <Hero />
        <Paragraph />
        <Scrolltodown />
        <FilterSection />
        <CountrySection />
        <Content />
        <Card
          title="Artiklar relaterade till Röda Viner Frankrike"
          subtitle="Från vår redaktion"
        />
        <Footer />
      </>
    </>
  );
}
