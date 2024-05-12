import React from "react";
import Slider from "react-slick";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({ data }) => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container mx-auto max-w-[1400px] p-4">
        <Slider {...settings}>
          {data.map((item) => {
            return (
                <div>
                    <CarouselItem subtitle={item.subtitle} description={item.description} title={item.title} image={item.image}>
                    </CarouselItem>
                </div>
            )
          })}
        </Slider>
      </div>
    )
}