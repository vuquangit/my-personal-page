import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { configSlider } from "./configSlider";
import SliderItem from "./SliderItem";

const CoverPhoto = ({ items = [] }) => {
  return (
    <Slider {...configSlider}>
      {items.map(item => (
        <SliderItem key={item.id} {...item} />
      ))}
    </Slider>
  );
};

export default CoverPhoto;
