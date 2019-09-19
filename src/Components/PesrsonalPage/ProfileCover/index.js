import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {  configSlider } from "./configSlider";
import SliderItem from "./SliderItem";
import CoverList from './mock.json';
import {ProfileCoverStyle} from "./ProfileCover.style"

const ProfileCover = () => {
  const classes = ProfileCoverStyle();

  return ( 
    <div className={classes.root}>
      <Slider {...configSlider} > 
        {
          CoverList.map((item) => < SliderItem {...item} /> )
        }
      </Slider> 
      </div>
  );
};

export default ProfileCover;