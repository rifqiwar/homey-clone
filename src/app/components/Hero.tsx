// src/components/Hero.tsx
import React from "react";
import SearchBox from "./SearchBox";

const Hero: React.FC = () => {
  return (
    <section
      className="hero flex flex-col items-center justify-center text-center text-white h-96 bg-cover"
      style={{ backgroundImage: "url(https://demo11.gethomey.io/wp-content/uploads/2021/09/header-05.jpg)" }}
      // style={{ backgroundImage: "url(/images/bahamas.jpg)" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        Discover the best accommodations in Bahamas Islands
      </h1>
      <SearchBox />
    </section>
  );
};

export default Hero;
