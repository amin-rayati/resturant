import { React, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel2() {
  const slickDefaults = {
    slidesToShow: 4,
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
          slidesToShow: 4,
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
        breakpoint: 430,
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
        breakpoint: 350,
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
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: 'rgb(0 0 0 / 50%) 0px 0px 24px -11px',
            padding: '15px 20px',
            background: 'white',
            borderRadius: '5px',
            border: '2px solid #17A725',
          }}
        >
          <span style={{ fontWeight: 'bolder', fontSize: '15px' }}>
            فست فود
          </span>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: 'rgb(0 0 0 / 50%) 0px 0px 24px -11px',
            padding: '15px 20px',
            background: 'white',
            borderRadius: '5px',
          }}
        >
          <span>فست فود</span>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: 'rgb(0 0 0 / 50%) 0px 0px 24px -11px',
            padding: '15px 20px',
            background: 'white',
            borderRadius: '5px',
          }}
        >
          <span>فست فود</span>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: 'rgb(0 0 0 / 50%) 0px 0px 24px -11px',
            padding: '15px 20px',
            background: 'white',
            borderRadius: '5px',
          }}
        >
          <span>فست فود</span>
        </div>
      </div>
    </Slider>
  )
}
