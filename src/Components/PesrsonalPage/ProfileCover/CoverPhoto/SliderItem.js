import React from "react";
import { ProfileCoverStyle } from "../ProfileCover.style";

const SlideItem = ({ image = "", alt = "" }) => {
  const classes = ProfileCoverStyle();

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "315px"
      }}
      className={classes.sliderItem}
    />
  );
};

export default SlideItem;
