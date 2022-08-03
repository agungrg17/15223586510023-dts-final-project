import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselBox = ({ children }) => {
  return (
    <Carousel
      sx={{ height: "80vh" }}
      IndicatorIcon={false}
      stopAutoPlayOnHover={false}
      interval={4000}
    >
      {children}
    </Carousel>
  );
}
export default CarouselBox;
