"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import components
import Navbar from "./Components/Navbar";
import Subscription from "./Components/Subscription";
import SkeletonLoader from "./Components/SkeletonLoading/SkeletonLoader";
import Info from "./Components/Info";
import Footer from "./Components/Footer";

// Import styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="container mt-6 mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Main Article */}
        <Link
          href={`/article/${posts[0].slug}`}
          className="w-full lg:w-1/2 bg-[#f5f5f5] overflow-hidden"
        >
          <div className="relative w-full">
            {/* Image container*/}
            <div className="relative w-full h-0 pb-[66.67%] sm:pb-[50%] lg:pb-[66.67%]">
              <Image
                src={
                  posts[0].featuredImage?.node?.sourceUrl || "/placeholder.svg"
                }
                alt={posts[0].featuredImage?.node?.altText || "Featured Image"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="sm:object-contain lg:object-cover"
              />
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-outfit font-medium text-black text-lg mt-4 sm:mt-8">
              {posts[0].title}
            </h2>
            <p className="mt-4 font-outfit text-gray-900 text-xs">
              {new Date(posts[0].date).toLocaleDateString("sv-SE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-[#694848] text-xs font-outfit mt-2">
              {posts[0].author?.node?.name || "Unknown Author"}
            </p>
            <p className="font-outfit text-sm text-gray-900 font-extralight mt-4 leading-relaxed">
              {posts[0].excerpt?.replace(/<[^>]+>/g, "") ||
                "No excerpt available"}
            </p>
          </div>
        </Link>

        {/* Side Articles */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {posts.slice(1, 4).map((post) => (
            <Link key={post.id} href={`/article/${post.slug}`}>
              <div className="flex flex-col sm:flex-row gap-4 bg-[#f5f5f5] overflow-hidden">
                <div className="relative h-48 sm:h-auto sm:w-1/3">
                  <Image
                    src={
                      post.featuredImage?.node?.sourceUrl || "/placeholder.svg"
                    }
                    alt={post.featuredImage?.node?.altText || "Featured Image"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 sm:w-2/3">
                  <h3 className="font-outfit font-medium text-black text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-outfit text-gray-900 text-xs">
                    {new Date(post.date).toLocaleDateString("sv-SE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-[#694848] text-xs font-outfit mt-2">
                    {post.author?.node?.name || "Unknown Author"}
                  </p>
                  <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed">
                    {(
                      post.excerpt?.replace(/<[^>]+>/g, "") ||
                      "No excerpt available"
                    ).substring(0, 100)}
                    ...
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {/* Button */}
          <div className="mt-8">
            <Link href="/articles" passHref>
              <button className="w-full py-2 font-outfit text-red-500 hover:bg-red-100 border rounded-full border-red-500 transition duration-300">
                Se fler artiklar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, posts }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="font-outfit text-center font-extralight text-red-500">
        {title}
      </div>
      <div className="text-center font-outfit text-xl md:text-2xl font-medium mt-4">
        {subtitle}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {posts.map((post) => (
          <Link href={`/article/${post.slug}`} key={post.id} className="flex">
            <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow w-full">
              <div className="relative w-full"></div>
              <div className="p-4 bg-[#f5f5f5] flex flex-col flex-grow">
                <h3 className="font-outfit font-medium text-black text-lg">
                  {post.title}
                </h3>
                <p className="mt-2 font-outfit text-gray-900 text-xs">
                  {new Date(post.date).toLocaleDateString("sv-SE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-[#694848] text-xs font-outfit mt-2">
                  {post.author?.node?.name || "Unknown Author"}
                </p>
                <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed flex-grow">
                  {(
                    post.excerpt?.replace(/<[^>]+>/g, "") ||
                    "No excerpt available"
                  ).substring(0, 80)}
                  ...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const TrendingPosts = ({ title, subtitle, posts }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="font-outfit text-center font-extralight text-red-500">
        {title}
      </div>
      <div className="text-center font-outfit text-xl md:text-2xl font-medium mt-4">
        {subtitle}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {posts.map((post) => (
          <Link href={`/article/${post.slug}`} key={post.id} className="flex">
            <div className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow w-full">
              <div className="relative w-full h-48 md:h-56 lg:h-64">
                <Image
                  src={
                    post.featuredImage?.node?.sourceUrl || "/placeholder.svg"
                  }
                  alt={post.featuredImage?.node?.altText || "Featured Image"}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 bg-[#f5f5f5] flex flex-col flex-grow">
                <h3 className="font-outfit font-medium text-black text-lg">
                  {post.title}
                </h3>
                <p className="mt-2 font-outfit text-gray-900 text-xs">
                  {new Date(post.date).toLocaleDateString("sv-SE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-[#694848] text-xs font-outfit mt-2">
                  {post.author?.node?.name || "Unknown Author"}
                </p>
                <p className="font-outfit text-sm text-gray-900 font-extralight mt-2 leading-relaxed flex-grow">
                  {(
                    post.excerpt?.replace(/<[^>]+>/g, "") ||
                    "No excerpt available"
                  ).substring(0, 80)}
                  ...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const WineCard = ({
  backgroundImage,
  title,
  category,
  articles,
  description,
  colorPicker,
}) => (
  <div className="p-2">
    <div
      className="relative w-full h-64 bg-cover bg-center transition-all duration-300 ease-in-out group"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div
        className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-snug group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <div className="absolute inset-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="flex items-center justify-between px-4">
            <div
              className={`flex flex-start m-4 w-fit px-3 text-white font-outfit text-sm font-thin rounded-lg`}
              style={{ backgroundColor: colorPicker || "#000000" }}
            >
              {category.name}
            </div>
            <div className="text-white text-sm font-outfit">
              {articles} ARTIKLAR
            </div>
          </div>
          <p className="font-outfit text-lg md:text-2xl flex items-center justify-center leading-snug p-7 text-white font-medium ">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === "left" ? "left-2" : "right-2"
    } z-10 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-full p-2`}
    aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
  >
    {direction === "left" ? (
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    ) : (
      <ChevronRight className="w-6 h-6 text-gray-800" />
    )}
  </button>
);

const WineCarousel = ({ categories }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const wineCards = categories.map((category) => ({
    backgroundImage:
      category.categoriesImagesAndOtherFields?.categoriesImage?.node
        ?.sourceUrl || "/placeholder.svg",
    title: category.name || "Unknown Category",
    category: { name: category.name || "Unknown Category" },
    articles: category.count || 0,
    description:
      category.categoriesImagesAndOtherFields?.shortDescription ||
      "No description available",
    colorPicker:
      category.categoriesImagesAndOtherFields?.categorycolorpicker || "#000000",
  }));

  return (
    <div className="container mx-auto p-1 relative">
      <Slider {...settings}>
        {wineCards.map((card, index) => (
          <WineCard key={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default function ClientHome({
  initialHeroPosts,
  initialNewsPosts,
  initialTrendingPosts,
  initialWineCategories,
}) {
  const [loading, setLoading] = useState(true);
  const [heroPosts, setHeroPosts] = useState(initialHeroPosts || []);
  const [newsPosts, setNewsPosts] = useState(initialNewsPosts || []);
  const [trendingPosts, setTrendingPosts] = useState(
    initialTrendingPosts || []
  );
  const [wineCategories, setWineCategories] = useState(
    initialWineCategories || []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of my Next.js app"
        />
      </Head>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <Navbar />
          <Hero posts={heroPosts} />
          <TrendingPosts
            title="TRENDIGT"
            subtitle="Artiklar värda att läsa från våra redaktörer"
            posts={trendingPosts.slice(0, 6)}
          />
          <Subscription />
          <WineCarousel categories={wineCategories} />
          <Card
            title="NYHETER"
            subtitle="Den mest populära artikeln i dryckesvärlden"
            posts={newsPosts.slice(0, 6)}
          />
          <Info />
          <Footer />
        </>
      )}
    </>
  );
}
