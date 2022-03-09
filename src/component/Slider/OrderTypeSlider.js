import { React, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel2() {
  const slickDefaults = {
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    rtl: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,

          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,

          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,

          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,

          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,

          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  }

  return (
    <Slider {...slickDefaults}>
      <div>
        <div
          style={{
            borderRadius: '25px',
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
            padding: '15px 20px',
            background: 'white',
          }}
        >
          <span>سفارش حضوری</span>
        </div>
      </div>
      <div>
        <div
          style={{
            borderRadius: '25px',
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
            padding: '15px 20px',
            background: 'white',
          }}
        >
          <span>سفارش بیرون بر</span>
        </div>
      </div>
      <div>
        <div
          style={{
            borderRadius: '25px',
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
            padding: '15px 20px',
            background: 'white',
          }}
        >
          <span>رزرو میز</span>
        </div>
      </div>
    </Slider>
  )
}
