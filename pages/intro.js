import React from 'react'
import Slider from 'react-slick'
import Zurag from '../components/Zurag'

export default function Intro({ settings }) {
  return (
    <section id="mu-slider">
      <div className="mu-slider-area">
        {/* <!-- Top slider --> */}
        <div class="mu-top-slider">
          <Slider {...settings}>
            <Zurag
              image="/assets/img/slider/1.jpeg"
              title="Welcome"
              title1="To The OsteriaX"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Itaque voluptatem accusamus non quidem, deleniti optio."
            />
            <Zurag
              image="/assets/img/slider/2.jpeg"
              title="The Elegant"
              title1="Italian Restaurant"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Itaque voluptatem accusamus non quidem, deleniti optio."
            />
            <Zurag
              image="/assets/img/slider/3.jpeg"
              title="Delicious"
              title1="Spicy Masalas"
              body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Itaque voluptatem accusamus non quidem, deleniti optio."
            />
            {/* <!-- / Top slider single slide -->    */}
          </Slider>
        </div>
      </div>
    </section>
  )
}
