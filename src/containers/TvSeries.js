import React, { useEffect } from "react";
import SeriesBanner from "../components/SeriesBanner";
import SeriesCard from "../components/SeriesCard";
import SeriesCardTop from "../components/SeriesCardTop";
import Loading from "../components/Loading";
import {
  usePopularSeriesQuery,
  useTrendingSeriesWeeklyQuery,
  useTopRatedSeriesQuery,
  useLatestSeriesQuery
} from "../services/movieSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function TvSeries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: dataPopular,
    error: errorPopular,
    isLoading: isLoadingPopular,
  } = usePopularSeriesQuery();

  const {
    data: dataTrending,
    error: errorTrending,
    isLoading: isLoadingTrending,
  } = useTrendingSeriesWeeklyQuery();

  const {
    data: dataLatestSeries,
    error: errorLatestSeries,
    isLoading: isLoadingLatestSeries,
  } = useLatestSeriesQuery();

  const {
    data: dataTopSeries,
    error: errorTopSeries,
    isLoading: isLoadingTopSeries,
  } = useTopRatedSeriesQuery();

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
      {errorPopular || errorTrending || errorLatestSeries || errorTopSeries ? (
        <p className="text-center">Oh no, there is an error</p>
      ) : isLoadingPopular ||
        isLoadingTrending ||
        isLoadingLatestSeries ||
        isLoadingTopSeries ? (
        <Loading />
      ) : dataPopular && dataTrending && dataLatestSeries && dataTopSeries ? (
        <>
          {/* Movie Banner */}
          <Swiper
            slidesPerView={1}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 10000,
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
                  <SeriesBanner item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Trending */}
          {/* <div className="container">
            <p className="text-xl font-bold mt-16 my-4">
              🔥 Trending Series
            </p>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {dataTrending.results.map((item) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={item.id}>
                            <SeriesCard key={item.id} item={item} />
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
            <p className="text-xl font-bold mt-16 my-4">
              🔥 Trending Series
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
                    <SeriesCard key={item.id} item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Top Rated Series */}
          {/* <div className="container">
            <p className="text-xl font-bold mt-16 mb-4">
              🥇 Top Rated Series
            </p>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {dataTopSeries.results.slice(0, 10).map((item, index) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={item.id}>
                            <SeriesCardTop key={item.id} item={item} top={index} />
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
            <p className="text-xl font-bold mt-16 mb-4">
              🥇 Top Rated Series
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
              {dataTopSeries.results.slice(0, 10).map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <SeriesCardTop key={item.id} item={item} top={index} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Latest Series */}
          {/* <div className="container">
            <p className="text-xl font-bold mt-16 my-4">⭐ Latest Series</p>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id={"slider"} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {dataLatestSeries.results.map((item) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={item.id}>
                            <SeriesCard key={item.id} item={item} />
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
            <p className="text-xl font-bold mt-16 my-4">⭐ Latest Series</p>
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
              {dataLatestSeries.results.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <SeriesCard key={item.id} item={item}  />
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

export default TvSeries;
