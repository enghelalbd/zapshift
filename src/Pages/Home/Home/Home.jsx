import React from "react";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import Reviews from "../Reviews/Reviews";

const reviesPromise=fetch('/reviews.json').then(res=>res.json())

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Reviews reviewsPromise={reviesPromise}></Reviews>
    </div>
  );
};

export default Home;
