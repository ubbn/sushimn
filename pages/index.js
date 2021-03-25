import React from 'react'
import Slider from 'react-slick'
import Intro from './intro'
import About from './about'
import Counter from './counter'
import Menu from './menu'
import Reservation from './reservation'
import Gallery from './gallery'
import Testimonial from './testimonial'
import Chefs from './chefs'
import Contacts from './contacts'
import Map from './map'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: false,
}
const settingsTest = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: false,
}

export default function Home() {
  return (
    <div>
      <Intro settings={settings} />
      <About />

      <Counter />
      <Menu />
      <Reservation />
      <Gallery />
      <Testimonial settings={settingsTest} />
      <Chefs />
      <Contacts />
      <Map />
    </div>
  )
}
