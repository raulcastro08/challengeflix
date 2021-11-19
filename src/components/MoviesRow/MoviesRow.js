import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ListArea, List, Img } from "./MoviesRowStyle";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const MoviesRow = ({ title, items }) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SectionDivider />
      <ListArea>
        <List>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <Link href={`/movie/${item.id}`}>
                <Img
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
            ))}
        </List>
      </ListArea>
    </Section>
  );
};

export default MoviesRow;
