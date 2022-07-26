import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMAGE_URL } from "../apis/tmdb";
import requestImage from "../assets/getImage";

function MovieCard({ item, top }) {
  const formatDate = (releaseDate) => {
    const date = new Date(releaseDate);
    const formatDate = date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formatDate;
  };

  return (
    <Link to={`/series/${item.id}`}>
      <div className="movie-card flex flex-col items-center gap-2 cursor-pointer">
        <div className="flex items-center">
          <img
            src={requestImage[top]}
            alt={item.name}
            className="object-right w-32"
          />
          <img
            src={
              item.poster_path
                ? `${BASE_IMAGE_URL}${item.poster_path}`
                : "/image_not_found.png"
            }
            alt={item.name}
            className="movie-top h-60 w-40 block rounded-sm object-cover object-center"
          />
        </div>
        <p className="movie-card__title font-medium text-center text-lg">
          {item.name}
        </p>
        <p className="text-sm font-light text-center">
          {item.first_air_date && formatDate(item.first_air_date)}
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;
