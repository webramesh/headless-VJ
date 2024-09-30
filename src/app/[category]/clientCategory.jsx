"use client";

import React from "react";
import Head from "next/head";

// Import components
import Navbar from "../../app/Components/Navbar";
import Footer from "../../app/Components/Footer";

const CategoryPost = ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <p>Date: {new Date(post.date).toLocaleDateString("sv-SE")}</p>
    <p>Author: {post.author?.node?.name || "Unknown Author"}</p>
    <p>Featured Image: {post.featuredImage?.node?.sourceUrl || "No image"}</p>
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
);

export default function ClientCategory({ initialPosts }) {
  return (
    <>
      <Head>
        <title>Category Page</title>
        <meta
          name="description"
          content="This is the category page of my Next.js app"
        />
      </Head>
      <Navbar />
      <div>
        <h1>Category Posts</h1>
        {initialPosts.map((post) => (
          <CategoryPost key={post.id} post={post} />
        ))}
      </div>
      <Footer />
    </>
  );
}