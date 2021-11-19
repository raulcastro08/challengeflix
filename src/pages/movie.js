import React, { useState, useEffect } from "react";

import Hero from "../components/Hero/Hero";

import { Layout } from "../layout/Layout";
import Tmdb from "../../src/pages/api/Tmdb";

const MoviePage = () => {
  const [movieList, setMovieList] = useState([]);

  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default MoviePage;
