import { React, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'
export default function Carousel2({ id }) {
  const { pathname } = useLocation()
  const resBarcode = pathname.split('/')[1]

  const slickDefaults = {
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    rtl: true,
    infinite: true,
    autoplay: false,
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

          autoplay: false,
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

          autoplay: false,
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

          autoplay: false,
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

          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,

          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  }

  return (
    <Slider {...slickDefaults}>
      <div>
        <LinkContainer
          to={`/${resBarcode}/orderonline`}
          style={{
            borderRadius: '25px',
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
            padding: '12px 15px',
            background: 'white',
          }}
        >
          <div>
            <span style={{ fontSize: '11px' }}>سفارش حضوری</span>
          </div>
        </LinkContainer>
      </div>
      <div>
        <div
          style={{
            borderRadius: '25px',
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
            padding: '12px 15px',
            background: 'white',
          }}
        >
          <div>
            <span style={{ fontSize: '11px' }}>سفارش بیرون بر</span>
          </div>
        </div>
      </div>
      <div>
        <LinkContainer
          to={`/${resBarcode}/reserve/${id}`}
          style={{
            borderRadius: '25px',
            textAlign: 'center',
            width: 'fit-content',
            boxShadow: ' 0px 0px 11px -4px rgb(0 0 0 / 50%)',
            padding: '12px 15px',
            background: 'white',
          }}
        >
          <div>
            <span style={{ fontSize: '11px' }}>رزرو میز</span>
          </div>
        </LinkContainer>
      </div>
    </Slider>
  )
}
