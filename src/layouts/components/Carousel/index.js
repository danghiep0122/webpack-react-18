import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './styles.scss'

import bannerImages from './banner-files/bannerImages'

const Carousel = () => {
  return (
    <section className="carousel">
      <AliceCarousel
        autoPlay
        animationDuration="2600"
        autoPlayInterval="4000"
        keyboardNavigation="true"
        mouseTracking="true"
        infinite="true"
      >
        <img alt="banner1" src={bannerImages.banner1} className="sliderImg" />
        <img alt="banner2" src={bannerImages.banner2} className="sliderImg" />
        <img alt="banner3" src={bannerImages.banner3} className="sliderImg" />
        <img alt="banner4" src={bannerImages.banner4} className="sliderImg" />
        <img alt="banner5" src={bannerImages.banner5} className="sliderImg" />
        <img alt="banner6" src={bannerImages.banner6} className="sliderImg" />
      </AliceCarousel>
    </section>
  )
}

export default Carousel
