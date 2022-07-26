import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY } from "../apis/tmdb";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    popularMovie: build.query({
      query: () => `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    }),
    trendingMoviesWeekly: build.query({
      query: () => `/trending/movie/week?api_key=${API_KEY}`,
    }),
    topRatedMovies: build.query({
        query: () => `/movie/top_rated?api_key=${API_KEY}`,
      }),
    latestMovies: build.query({
    query: () => `/movie/upcoming?api_key=${API_KEY}`,
    }),
    popularSeries: build.query({
        query: () => `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`,
      }),
    trendingSeriesWeekly: build.query({
      query: () => `/trending/tv/week?api_key=${API_KEY}`,
    }),
    topRatedSeries: build.query({
        query: () => `/tv/top_rated?api_key=${API_KEY}`,
      }),
    latestSeries: build.query({
    query: () => `/tv/airing_today?api_key=${API_KEY}`,
    }),
    trendingMoviesIndonesia: build.query({
      query: () =>
        `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_original_language=id&primary_release_date.gte=2022`,
    }),
    detailMovie: build.query({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    movieVideos: build.query({
      query: (id) => `/movie/${id}/videos?api_key=${API_KEY}`,
    }),
    movieSimilar: build.query({
      query: (id) => `/movie/${id}/similar?api_key=${API_KEY}`,
    }),
    movieRecommendations: build.query({
      query: (id) => `/movie/${id}/recommendations?api_key=${API_KEY}`,
    }),
    searchMovies: build.query({
      query: ({query, page}) =>
        `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    }),
    searchSeries: build.query({
        query: ({query, page}) =>
          `/search/tv?api_key=${API_KEY}&query=${query}&page=${page}`,
      }),
    detailSeries: build.query({
      query: (id) => `/tv/${id}?api_key=${API_KEY}`,
    }),
    seriesSimilar: build.query({
      query: (id) => `/tv/${id}/similar?api_key=${API_KEY}`,
    }),
    seriesRecommendations: build.query({
      query: (id) => `/tv/${id}/recommendations?api_key=${API_KEY}`,
    }),
    seriesVideos: build.query({
      query: (id) => `/tv/${id}/videos?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  usePopularMovieQuery,
  useTrendingMoviesWeeklyQuery,
  useTrendingSeriesWeeklyQuery,
  useTrendingMoviesIndonesiaQuery,
  useDetailMovieQuery,
  useMovieSimilarQuery,
  useMovieRecommendationsQuery,
  useMovieVideosQuery,
  useDetailSeriesQuery,
  usePopularSeriesQuery,
  useTopRatedSeriesQuery,
  useTopRatedMoviesQuery,
  useLatestSeriesQuery,
  useLatestMoviesQuery,
  useSeriesSimilarQuery,
  useSeriesRecommendationsQuery,
  useSeriesVideosQuery,
  useSearchMoviesQuery,
  useSearchSeriesQuery,
} = moviesApi;
