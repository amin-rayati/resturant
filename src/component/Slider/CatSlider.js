import { React, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useProjectContext } from '../../context/ProjectProvider'
export default function Carousel2({ cat }) {
  const slickDefaults = {
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 4,
          slidesToScroll: 4,
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
          slidesToScroll: 3,
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
          slidesToScroll: 3,
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
          slidesToScroll: 3,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: false,
          rtl: true,
          infinite: true,

          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  const { catId, setCatId, setCatName } = useProjectContext()

  return (
    <Slider {...slickDefaults}>
      <div>
        <div
          onClick={() => {
            setCatId('')
            setCatName('همه')
          }}
          className={catId === '' ? 'activeCat' : 'disActiveCat'}
        >
          <span>همه</span>
        </div>
      </div>
      {cat &&
        cat.map((e) => {
          return (
            <div>
              <div
                onClick={() => {
                  setCatId(e.id)
                  setCatName(e.name)
                }}
                className={catId === e.id ? 'activeCat' : 'disActiveCat'}
              >
                <span>{e.name}</span>
              </div>
            </div>
          )
        })}
    </Slider>
  )
}
