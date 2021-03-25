import React from 'react'
import Slider from 'react-slick'

export default function Testimonial({ settings }) {
  return (
    <section id="mu-client-testimonial">
      <div className="mu-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-client-testimonial-area">
                <div className="mu-title">
                  <span className="mu-subtitle">Testimonials</span>
                  <h2>What Customers Say</h2>
                </div>

                {/* <!-- testimonial content --> */}
                <div className="mu-testimonial-content">
                  {/* <!-- testimonial slider --> */}
                  <div className="mu-testimonial-slider">
                    <Slider {...settings}>
                      <div className="mu-testimonial-single">
                        <div className="mu-testimonial-info">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Cupiditate consequuntur ducimus cumque iure
                            modi nesciunt recusandae eligendi vitae
                            voluptatibus, voluptatum tempore, ipsum nisi
                            perspiciatis. Rerum nesciunt fuga ab natus, dolorem?
                          </p>
                        </div>
                        <div className="mu-testimonial-bio">
                          <p>- David Muller</p>
                        </div>
                      </div>
                      <div className="mu-testimonial-single">
                        <div className="mu-testimonial-info">
                          <p>
                            2Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Cupiditate consequuntur ducimus cumque iure
                            modi nesciunt recusandae eligendi vitae
                            voluptatibus, voluptatum tempore, ipsum nisi
                            perspiciatis. Rerum nesciunt fuga ab natus, dolorem?
                          </p>
                        </div>
                        <div className="mu-testimonial-bio">
                          <p>- David Muller</p>
                        </div>
                      </div>
                      <div className="mu-testimonial-single">
                        <div className="mu-testimonial-info">
                          <p>
                            3Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Cupiditate consequuntur ducimus cumque iure
                            modi nesciunt recusandae eligendi vitae
                            voluptatibus, voluptatum tempore, ipsum nisi
                            perspiciatis. Rerum nesciunt fuga ab natus, dolorem?
                          </p>
                        </div>
                        <div className="mu-testimonial-bio">
                          <p>- David Muller</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
