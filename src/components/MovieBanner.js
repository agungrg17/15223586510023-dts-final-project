import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { BASE_IMAGE_URL } from "../apis/tmdb";
import genre from "../app/genre";
// import { useState, useEffect } from "react";
// import { useMovieVideosQuery } from "../services/movieSlice";
// import Modal from "./Modal";

function MovieCard({ item }) {
  const getGenre = (id) => {
    const filter = genre.filter((item) => item.id === id)[0];

    return filter.name;
  };

//   const [modal, setModal] = useState(false);
//   const [trailerKey, setTrailerKey] = useState("");
//   const { id } = useParams();
//   const {
//     data: dataMovieVid,
//   } = useMovieVideosQuery(`${id}`);

//   useEffect(() => {
//     setTrailerKey("");
//     const key = dataMovieVid
//       ? dataMovieVid.results.filter((vid) => vid.type === "Trailer")[0]?.key
//       : undefined;

//     setTrailerKey(key);
//   }, [dataMovieVid]);

  return (
    <>
    <Link to={`/movie/${item.id}`}>
      <div className="movie-card flex flex-col">
        <div className="absolute w-2/3 left-0 h-full flex gap-4 flex-col justify-center px-16 bg-gradient-to-r from-zinc-900"></div>
        <div className="container">
          <div className="absolute max-w-2xl h-full flex gap-4 flex-col justify-center">
            <p className="font-bold text-5xl text-shadow-title leading-[3.75rem]">
              {item.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.genre_ids.map((genre, index) => (
                <p
                  key={index}
                  className="text-shadow-white text-zinc-200 text-sm px-2 rounded-sm bg-gradient-to-br from-red-700"
                >
                  {getGenre(genre)}
                </p>
              ))}
            </div>
            <p className="text-shadow-desc text-lg">{item.overview}</p>
            {/* <div>
            {trailerKey ? (
                    <button
                      onClick={() => setModal(true)}
                      className="flex items-center gap-1 bg-red-700 hover:bg-red-800 w-fit text-zinc-200 cursor-pointer py-2 px-3 rounded-sm"
                    >
                      <img src="/ic_play.svg" alt="" />
                      Watch Trailer
                    </button>
                  ) : (
                    <p className="flex items-center gap-1 bg-zinc-400 w-fit text-black py-2 px-3 rounded-sm">
                      <img src="/ic_info.svg" alt="" /> Trailer not available
                    </p>
                  )}
            </div> */}
          </div>
        </div>
        <img
          src={`${BASE_IMAGE_URL}${item.backdrop_path}`}
          alt={item.title}
          className="rounded-sm h-[35rem] object-cover object-center bg-gradient-to-l from-zinc-900 "
        />
        <div className="absolute w-1/4 right-0 h-full flex gap-4 flex-col justify-center px-16 bg-gradient-to-l from-zinc-900"></div>
      </div>
        {/* Movie Trailer
        <Modal modal={modal} setModal={setModal} trailerKey={trailerKey} /> */}
    </Link>
    
    </>
  );
}

export default MovieCard;
