import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY } from "../apis/tmdb";

export const requestApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getTrending: build.query({
      query: ({media_type}) => ({
        // url: `trending/${media_type}/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `trending/${media_type}/week?api_key=${API_KEY}`,
      }),
    }),
    getPopular: build.query({
      query: ({media_type}) => ({
        // url: `${media_type}/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `${media_type}/popular?api_key=${API_KEY}`,
      }),
    }),
    getUpcoming: build.query({
      query: ({media_type}) => ({
        // url: `${media_type}/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `${media_type}/upcoming?api_key=${API_KEY}`,
      }),
    }),
    getTopRated: build.query({
      query: ({media_type}) => ({
        // url: `${media_type}/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `${media_type}/top_rated?api_key=${API_KEY}`,
      }),
    }),
    getLatest: build.query({
      query: ({media_type}) => ({
        // url: `discover/${media_type}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=release_date.asc&page=1&primary_release_year=2022&with_watch_monetization_types=flatrate`,
        url: `discover/${media_type}?api_key=${API_KEY}&language=en-US&sort_by=release_date.asc&page=1&primary_release_year=2022&with_watch_monetization_types=flatrate`,
      }),
    }),
    getDetails: build.query({
      query: ({media_type, id}) => ({
        // url: `${media_type}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `${media_type}/${id}?api_key=${API_KEY}`,
      }),
    }),
    getRecommendations: build.query({
      query: ({media_type, id}) => ({
        // url: `${media_type}/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `${media_type}/${id}/recommendations?api_key=${API_KEY}`,
      }),
    }),
    getCredits: build.query({
      query: ({media_type, id}) => ({
        // url: `${media_type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `${media_type}/${id}/credits?api_key=${API_KEY}`,
      }),
    }),
    getSimilar: build.query({
      query: ({media_type, id}) => ({
        // url: `${media_type}/${id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `${media_type}/${id}/similar?api_key=${API_KEY}`,
      }),
    }),
    getTvAiringToday: build.query({
      query: () => ({
        // url: `tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `tv/airing_today?api_key=${API_KEY}`,
      }),
    }),
    getTvOnTheAir: build.query({
      query: () => ({
        // url: `tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        url: `tv/on_the_air?api_key=${API_KEY}`,
      }),
    }),
    getSearch: build.query({
      query: ({query}) => ({
        // url: `search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query${query}`,
        url: `search/multi?api_key=${API_KEY}&query=${query}`,
      }),
    }),
  }),
});

export const {
  useGetCreditsQuery,
  useGetDetailsQuery,
  useGetRecommendationsQuery,
  useGetSimilarQuery,
  useGetTrendingQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetPopularQuery,
  useGetLatestQuery,
  useGetTvAiringTodayQuery,
  useGetTvOnTheAirQuery,
  useGetSearchQuery
} = requestApi;


// export const requestApi = createApi({
//   reducerPath: "requestApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,

//   endpoints: (build) => ({
//     popularMovie: build.query({
//       query: () => `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
//     }),
//     trendingMoviesWeekly: build.query({
//       query: () => `/trending/movie/week?api_key=${API_KEY}`,
//     }),
//     topRatedMovies: build.query({
//         query: () => `/movie/top_rated?api_key=${API_KEY}`,
//       }),
//     latestMovies: build.query({
//     query: () => `/movie/upcoming?api_key=${API_KEY}`,
//     }),
//     popularSeries: build.query({
//         query: () => `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`,
//       }),
//     trendingSeriesWeekly: build.query({
//       query: () => `/trending/tv/week?api_key=${API_KEY}`,
//     }),
//     topRatedSeries: build.query({
//         query: () => `/tv/top_rated?api_key=${API_KEY}`,
//       }),
//     latestSeries: build.query({
//     query: () => `/tv/airing_today?api_key=${API_KEY}`,
//     }),
//     trendingMoviesIndonesia: build.query({
//       query: () =>
//         `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_original_language=id&primary_release_date.gte=2022`,
//     }),
//     detailMovie: build.query({
//       query: (id) => `/movie/${id}?api_key=${API_KEY}`,
//     }),
//     movieVideos: build.query({
//       query: (id) => `/movie/${id}/videos?api_key=${API_KEY}`,
//     }),
//     movieSimilar: build.query({
//       query: (id) => `/movie/${id}/similar?api_key=${API_KEY}`,
//     }),
//     movieRecommendations: build.query({
//       query: (id) => `/movie/${id}/recommendations?api_key=${API_KEY}`,
//     }),
//     searchMovies: build.query({
//       query: ({query, page}) =>
//         `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
//     }),
//     searchSeries: build.query({
//         query: ({query, page}) =>
//           `/search/tv?api_key=${API_KEY}&query=${query}&page=${page}`,
//       }),
//     detailSeries: build.query({
//       query: (id) => `/tv/${id}?api_key=${API_KEY}`,
//     }),
//     seriesSimilar: build.query({
//       query: (id) => `/tv/${id}/similar?api_key=${API_KEY}`,
//     }),
//     seriesRecommendations: build.query({
//       query: (id) => `/tv/${id}/recommendations?api_key=${API_KEY}`,
//     }),
//     seriesVideos: build.query({
//       query: (id) => `/tv/${id}/videos?api_key=${API_KEY}`,
//     }),
//     movieImages: build.query({
//       query: (id) => `/movie/${id}/images?api_key=${API_KEY}`,
//       // query: (id) => `/movie/${id}?api_key=${API_KEY}`,
//     })
//   }),
// });

// export const {
//   usePopularMovieQuery,
//   useTrendingMoviesWeeklyQuery,
//   useTrendingSeriesWeeklyQuery,
//   useTrendingMoviesIndonesiaQuery,
//   useDetailMovieQuery,
//   useMovieSimilarQuery,
//   useMovieRecommendationsQuery,
//   useMovieVideosQuery,
//   useDetailSeriesQuery,
//   usePopularSeriesQuery,
//   useTopRatedSeriesQuery,
//   useTopRatedMoviesQuery,
//   useLatestSeriesQuery,
//   useLatestMoviesQuery,
//   useSeriesSimilarQuery,
//   useSeriesRecommendationsQuery,
//   useSeriesVideosQuery,
//   useSearchMoviesQuery,
//   useSearchSeriesQuery,
//   useMovieImagesQuery,
// } = requestApi;
