import React, { useEffect } from "react";
import { Hero } from "./Hero";
import { Featuredproduct } from "./Featuredproduct";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";

export const Home = () => {
  useEffect(() => {
    document.title = "Ebooks | Home";
  }, []);
  return (
    <main className="dark:bg-gray-800">
      <Hero />
      <Featuredproduct />
      <Testimonials />
      <Faq />
    </main>
  );
};
