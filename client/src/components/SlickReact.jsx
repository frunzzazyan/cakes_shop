import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles/SlickReact.css"

export default function SimpleSlider({products}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="slick" {...settings}>
      {products.map(elem=>{
        return <div key={elem._id}>
            <div>
                <h1>productId_{elem._id}</h1>
            </div>
        </div>
      })}
    </Slider>
  );
}