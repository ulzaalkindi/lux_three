import React from "react";
import Headers from "../parts/Headers";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Hero from "../parts/HomePage/Hero";
import JustArrived from "../parts/HomePage/JustArrived";

export default function HomePage() {
  return (
    <>
      <Headers />
      <Hero />
      <BrowseRoom />
      <JustArrived />
    </>
  );
}
