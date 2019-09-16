import React from "react";

const homeStyles = {
  backgoundImage: {
    width: "auto",
    height: "100vh",
    "background-position": "center",
    "background-repeat": "no-repeat",
    backgroundSize: "cover"
  }
};

const HomePage = () => {
  return (
    <div>
      <h1
        style={{
          color: "black",
          textAlign: "center"
        }}
      >
        WELLCOME TO MY HOMEPAGE
      </h1>
      <div
        style={{
          ...homeStyles.backgoundImage,
          "background-image":
            "url(https://www.apple.com/v/home/em/images/promos/apple-tv-plus/apple_tv_plus__euax5nw0l46e_large.jpg)"
        }}
      />
      <div
        style={{
          ...homeStyles.backgoundImage,
          "background-image":
            "url(https://www.apple.com/v/home/em/images/heroes/ipad/ipad__bq6djchifrbm_large.jpg)"
        }}
      />
      <div
        style={{
          ...homeStyles.backgoundImage,
          "background-image":
            "url(https://www.apple.com/v/home/em/images/heroes/watch-series-5/watch__csqqcayzqueu_large.jpg)"
        }}
      />
    </div>
  );
};

export default HomePage;
