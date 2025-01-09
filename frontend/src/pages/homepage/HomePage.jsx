import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import FeaturedPhotographers from "../../components/featuredPhotographers/FeaturedPhotographers";
import Categories from "../../components/categories/Categories";
import HighlightedPhotographers from "../../components/highlightedPhotographers/HighlightedPhotographers";
import FeaturedPhotos from "../../components/featuredPhotos/FeaturedPhotos";
import JoinUs from "../../components/joinUs/JoinUs";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedPhotographers />
      <Categories />
      <HighlightedPhotographers />
      <FeaturedPhotos />
      <JoinUs />
      <Footer />
    </>
  );
};

export default HomePage;
