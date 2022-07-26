import React, { useEffect } from "react";
import MovieBanner from "../components/MovieBanner";
import MovieCard from "../components/MovieCard";
import MovieCardTop from "../components/MovieCardTop";
import Loading from "../components/Loading";
import {
  usePopularMovieQuery,
  useTrendingMoviesWeeklyQuery,
  useTrendingSeriesWeeklyQuery,
  useTrendingMoviesIndonesiaQuery,
} from "../services/movieSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
//mport { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: dataPopular,
    error: errorPopular,
    isLoading: isLoadingPopular,
  } = usePopularMovieQuery();

  const {
    data: dataTrending,
    error: errorTrending,
    isLoading: isLoadingTrending,
  } = useTrendingMoviesWeeklyQuery();

  const {
    data: dataTrendingSeries,
    error: errorTrendingSeries,
    isLoading: isLoadingTrendingSeries,
  } = useTrendingSeriesWeeklyQuery();

  const {
    data: dataInd,
    error: errorInd,
    isLoading: isLoadingInd,
  } = useTrendingMoviesIndonesiaQuery();

  
//   const slideLeft = () => {
//     const slider = document.getElementById('slider')
//     slider.scrollLeft = slider.scrollLeft - 500;
// }

//   const slideRight = () => {
//     var slider = document.getElementById('slider');
//     slider.scrollLeft = slider.scrollLeft + 500;
// };

  return (
    <div className="mb-20">
      {errorPopular || errorTrending || errorTrendingSeries || errorInd ? (
        <p className="text-center">Oh no, there was an error</p>
      ) : isLoadingPopular ||
        isLoadingTrending ||
        isLoadingTrendingSeries ||
        isLoadingInd ? (
        <Loading />
      ) : dataPopular && dataTrending && dataTrendingSeries && dataInd ? (
        <>
          {/* Movie Banner */}
          <Swiper
            slidesPerView={1}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="mySwiper"
          >
            {dataPopular.results.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <MovieBanner item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Trending */}
          {/* <>
          <div className="container">
            <p className="text-xl font-bold mt-16 my-4">
              🔥 Trending This Week
            </p>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {dataTrending.results.map((item) => (
                        //  <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={item.id}>
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={item.id}>
                            <MovieCard key={item.id} item={item} />
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </div>
      </> */}
          <div className="container">
            <p className="text-xl font-bold mt-16 my-4">
              🔥 Trending This Week
            </p>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              className="mySwiper"
              breakpoints={{
                440: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
            >
              {dataTrending.results.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <MovieCard key={item.id} item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Indonesian Movies */}
          {/* <>
          <div className="container">
            <p className="text-xl font-bold mt-16 mb-4">
              🥇 Top 10 Indonesian Movies
            </p>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {dataInd.results.slice(0, 10).map((item, index) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={item.id}>
                            <MovieCardTop key={item.id} item={item} top={index} />
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </div>
      </> */}


          <div className="container">
            <p className="text-xl font-bold mt-16 mb-4">
              🥇 Top 10 Indonesian Movies
            </p>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {dataInd.results.slice(0, 10).map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <MovieCardTop key={item.id} item={item} top={index} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Best Series */}

          {/* <div className="container">
            <p className="text-xl font-bold mt-16 my-4">⭐ Best Series</p>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {dataTrendingSeries.results.map((item) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={item.id}>
                            <MovieCard key={item.id} item={item} movie={false} />
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </div> */}
          <div className="container">
            <p className="text-xl font-bold mt-16 my-4">⭐ Best Series</p>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              className="mySwiper"
              breakpoints={{
                440: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
            >
              {dataTrendingSeries.results.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <MovieCard key={item.id} item={item} movie={false} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default HomePage;
