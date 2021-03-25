import React from 'react'
import Slider from 'react-slick'

const settingsChef = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
}
export default function Chefs() {
  return (
    <section id="mu-chef">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-chef-area">
              <div className="mu-title">
                <span className="mu-subtitle">Our Professionals</span>
                <h2>MASTER CHEFS</h2>
              </div>

              <div className="mu-chef-content">
                <div className="mu-chef-nav">
                  <Slider {...settingsChef}>
                    <div className="mu-single-chef-parent">
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img
                            src="/assets/img/chef/chef-1.jpg"
                            alt="chef img"
                          />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>Simon Jonson</h4>
                          <span>Head Chef</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mu-single-chef-parent">
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img
                            src="/assets/img/chef/chef-2.jpg"
                            alt="chef img"
                          />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>Kelly Wenzel</h4>
                          <span>Pizza Chef</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mu-single-chef-parent">
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img
                            src="/assets/img/chef/chef-3.jpg"
                            alt="chef img"
                          />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>Greg Hong</h4>
                          <span>Grill Chef</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mu-single-chef-parent">
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img
                            src="/assets/img/chef/chef-4.jpg"
                            alt="chef img"
                          />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>Marty Fukuda</h4>
                          <span>Burger Chef</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mu-single-chef-parent">
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img
                            src="/assets/img/chef/chef-5.jpg"
                            alt="chef img"
                          />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>Simon Jonson</h4>
                          <span>Head Chef</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mu-single-chef-parent">
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img
                            src="/assets/img/chef/chef-1.jpg"
                            alt="chef img"
                          />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>Kelly Wenzel</h4>
                          <span>Pizza Chef</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mu-single-chef-parent">
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img
                            src="/assets/img/chef/chef-2.jpg"
                            alt="chef img"
                          />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>Greg Hong</h4>
                          <span>Grill Chef</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mu-single-chef-parent">
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img
                            src="/assets/img/chef/chef-3.jpg"
                            alt="chef img"
                          />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>Marty Fukuda</h4>
                          <span>Burger Chef</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
