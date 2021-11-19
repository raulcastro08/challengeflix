import React, { useState, useEffect } from "react";

import MovieRow from "../components/MoviesRow/MoviesRow";

import { Layout } from "../layout/Layout";
import Tmdb from "../../src/pages/api/Tmdb";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <Layout>
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items} />
      ))}
    </Layout>
  );
};

export default Home;
