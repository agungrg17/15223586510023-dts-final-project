// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { BASE_IMAGE_URL } from "../apis/tmdb";

// // function MovieCard({ item, movie = true }) {
// //   const formatDate = (releaseDate) => {
// //     const date = new Date(releaseDate);
// //     const formatDate = date.toLocaleDateString("en-us", {
// //       year: "numeric",
// //       month: "short",
// //       day: "numeric",
// //     });

// //     return formatDate;
// //   };

// //   return (
// //     <>
   
// //     <Link to={movie ? `/movie/${item.id}` : `/series/${item.id}`}>
// //       <div className="movie-card flex flex-col gap-2 cursor-pointer">
// //         <div className="rounded-md bg-red-700 h-72 w-48">
// //           <img
// //             src={
// //               item.poster_path
// //                 ? `${BASE_IMAGE_URL}${item.poster_path}`
// //                 : "/image_not_found.png"
// //             }
// //             alt={item.title}
// //             className="h-full w-full movie rounded-md object-cover object-center"
// //           />
// //         </div>
// //         <p className="movie-card__title font-medium text-lg">
// //           {movie ? item.title : item.name}
// //         </p>
// //         <p className="text-sm font-light">
// //           {(item.release_date || item.first_air_date) &&
// //             formatDate(movie ? item.release_date : item.first_air_date)}
// //         </p>
// //       </div>
// //     </Link>
// //     </>
// //   );
// // }

// // export default MovieCard;

// import React from "react";
// import { Card, CardMedia, CardActionArea } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const MovieCard = ({ data }) => {
//   const navigate = useNavigate();

//   const handleCardClik = (mediaType) => {
//     navigate(`/details/${mediaType}/${data?.id}`);
//   };

//   return (
//     <Card
//       sx={{
//         maxWidth: 200,
//         borderRadius: "0",
//       }}
//     >
//       <CardActionArea
//         sx={{
//           ":hover": {
//             opacity: 0.9,
//           },
//         }}
//         onClick={() =>
//           data?.first_air_date ? handleCardClik("tv") : handleCardClik("movie")
//         }
//       >
//         <CardMedia
//           component="img"
//           height="300"
//           image={`https://image.tmdb.org/t/p/w500/${data?.poster_path?.replace(
//             "/",
//             ""
//           )}`}
//         />
//       </CardActionArea>
//     </Card>
//   );
// }

// export default MovieCard;
