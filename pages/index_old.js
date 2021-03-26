import React from 'react'
import Layout from '../components/layout'
import Slider from 'react-slick'
import Zurag from '../components/Zurag'

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
}

export default function Home() {
  const [active, setActive] = React.useState(0)

  const onClick = id => {
    setActive(id)
  }

  return (
    <Layout>
      {/* <!-- Start slider  --> */}
      <section id="mu-slider">
        <div className="mu-slider-area">
          {/* <!-- Top slider --> */}
          <Slider {...settings}>
            {/* <!-- Top slider single slide --> */}

            {/* <div className="mu-top-slider-single">
              <img src="/assets/img/slider/1.jpeg" alt="img" />
              <div className="mu-top-slider-content">
                <span className="mu-slider-small-title">Welcome</span>
                <h2 className="mu-slider-title">To The OsteriaX</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque voluptatem accusamus non quidem, deleniti optio.
                </p>
                <a
                  href="#mu-reservation"
                  className="mu-readmore-btn mu-reservation-btn">
                  BOOK A TABLE
                </a>
              </div>
            </div> */}

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
      </section>
      {/* <!-- End slider  -->

  <!-- Start About us --> */}
      <section id="mu-about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-about-us-area">
                <div className="mu-title">
                  <span className="mu-subtitle">Discover</span>
                  <h2>ABOUT US</h2>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mu-about-us-left">
                      <img src="/assets/img/about-us.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mu-about-us-right">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquam minus aliquid, itaque illum assumenda
                        repellendus dolorem, dolore numquam totam saepe, porro
                        delectus, libero enim odio quo. Explicabo ex sapiente
                        sit eligendi, facere voluptatum! Quia vero rerum sunt
                        porro architecto corrupti eaque corporis eum, enim
                        soluta, perferendis dignissimos, repellendus, beatae
                        laboriosam.
                      </p>
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quia.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quia.
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Atque similique molestias est quod reprehenderit,
                        quibusdam nam qui, quam magnam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About us -->

  <!-- Start Counter Section --> */}
      <section id="mu-counter">
        <div className="mu-counter-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-counter-area">
                  <ul className="mu-counter-nav">
                    <li className="col-md-3 col-sm-3 col-xs-12">
                      <div className="mu-single-counter">
                        <span>Fresh</span>
                        <h3>
                          <span className="counter-value" data-count="150">
                            0
                          </span>
                          <sup>+</sup>
                        </h3>
                        <p>Breakfast Items</p>
                      </div>
                    </li>

                    <li className="col-md-3 col-sm-3 col-xs-12">
                      <div className="mu-single-counter">
                        <span>Delicious</span>
                        <h3>
                          <span className="counter-value" data-count="60">
                            0
                          </span>
                          <sup>+</sup>
                        </h3>
                        <p>Lunch Items</p>
                      </div>
                    </li>

                    <li className="col-md-3 col-sm-3 col-xs-12">
                      <div className="mu-single-counter">
                        <span>Hot</span>
                        <h3>
                          <span className="counter-value" data-count="45">
                            0
                          </span>
                          <sup>+</sup>
                        </h3>
                        <p>Coffee Items</p>
                      </div>
                    </li>

                    <li className="col-md-3 col-sm-3 col-xs-12">
                      <div className="mu-single-counter">
                        <span>Satisfied</span>
                        <h3>
                          <span className="counter-value" data-count="6560">
                            0
                          </span>
                          <sup>+</sup>
                        </h3>
                        <p>Customers</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Counter Section --> 

  <!-- Start Restaurant Menu --> */}
      <section id="mu-restaurant-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-restaurant-menu-area">
                <div className="mu-title">
                  <span className="mu-subtitle">Discover</span>
                  <h2>OUR MENU</h2>
                </div>

                <div className="mu-restaurant-menu-content">
                  <ul className="nav nav-tabs mu-restaurant-menu">
                    <li
                      className={active === 0 ? 'active' : ''}
                      onClick={() => onClick(0)}>
                      <a href="#breakfast" data-toggle="tab">
                        Breakfast
                      </a>
                    </li>
                    <li
                      className={active === 1 ? 'active' : ''}
                      onClick={() => onClick(1)}>
                      <a href="#meals" data-toggle="tab">
                        Meals
                      </a>
                    </li>
                    <li
                      className={active === 2 ? 'active' : ''}
                      onClick={() => onClick(2)}>
                      <a href="#snacks" data-toggle="tab">
                        Snacks
                      </a>
                    </li>
                    <li
                      className={active === 3 ? 'active' : ''}
                      onClick={() => onClick(3)}>
                      <a href="#desserts" data-toggle="tab">
                        Desserts
                      </a>
                    </li>
                    <li
                      className={active === 4 ? 'active' : ''}
                      onClick={() => onClick(4)}>
                      <a href="#drinks" data-toggle="tab">
                        Drinks
                      </a>
                    </li>
                  </ul>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content">
                    <div
                      className={
                        active === 0
                          ? 'tab-pane fade in active'
                          : 'tab-pane fade'
                      }
                      id="breakfast">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-1.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-2.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-1.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-1.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-2.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-1.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        active === 1
                          ? 'tab-pane fade in active'
                          : 'tab-pane fade'
                      }
                      id="meals">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-3.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">
                                          English Breakfast GOGO 123
                                        </a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-4.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-3.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-4.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-3.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-4.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        active === 2
                          ? 'tab-pane fade in active'
                          : 'tab-pane fade'
                      }
                      id="snacks">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-5.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast123</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-6.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-5.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-5.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-6.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-5.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        active === 3
                          ? 'tab-pane fade in active'
                          : 'tab-pane fade'
                      }
                      id="desserts">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-7.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-8.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-7.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-8.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-7.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-8.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        active === 4
                          ? 'tab-pane fade in active'
                          : 'tab-pane fade'
                      }
                      id="drinks">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-9.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-10.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-9.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-9.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-10.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $11.95
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="/assets/img/menu/item-9.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">
                                        $15.85
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Restaurant Menu --> */}

      {/* <!-- Start Reservation section --> */}
      <section id="mu-reservation">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-reservation-area">
                <div className="mu-title">
                  <span className="mu-subtitle">Make A</span>
                  <h2>Reservation</h2>
                </div>

                <div className="mu-reservation-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione quidem autem iusto, perspiciatis, amet, quaerat
                    blanditiis ducimus eius recusandae nisi aut totam alias
                    consectetur et.
                  </p>

                  <div className="col-md-6">
                    <div className="mu-reservation-left">
                      <form className="mu-reservation-form">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <select className="form-control">
                                <option value="0">How Many?</option>
                                <option value="1 Person">1 Person</option>
                                <option value="2 People">2 People</option>
                                <option value="3 People">3 People</option>
                                <option value="4 People">4 People</option>
                                <option value="5 People">5 People</option>
                                <option value="6 People">6 People</option>
                                <option value="7 People">7 People</option>
                                <option value="8 People">8 People</option>
                                <option value="9 People">9 People</option>
                                <option value="10 People">10 People</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="datepicker"
                                placeholder="Date"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                cols="30"
                                rows="10"
                                placeholder="Your Message"></textarea>
                            </div>
                          </div>
                          <button type="submit" className="mu-readmore-btn">
                            Make Reservation
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-md-5 col-md-offset-1">
                    <div className="mu-reservation-right">
                      <div className="mu-opening-hour">
                        <h2>Opening Hours</h2>
                        <ul className="list-unstyled">
                          <li>
                            <p>Monday &amp; Tuesday</p>
                            <p>9:00 AM - 4:00 PM</p>
                          </li>
                          <li>
                            <p>Wednesday &amp; Thursday</p>
                            <p>9:00 AM - Midnight</p>
                          </li>
                          <li>
                            <p>Friday &amp; Saturday</p>
                            <p>9:00 AM - Midnight</p>
                          </li>
                          <li>
                            <p>Sunday</p>
                            <p>9:00 AM - 11:00 PM</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Reservation section -->

  <!-- Start Gallery --> */}
      <section id="mu-gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-gallery-area">
                <div className="mu-title">
                  <span className="mu-subtitle">Discover</span>
                  <h2>Our Gallery</h2>
                </div>

                <div className="mu-gallery-content">
                  {/* <!-- Start gallery image --> */}
                  <div className="mu-gallery-body">
                    {/* <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/1.jpg">
                            <img alt="img" src="/assets/img/gallery/1.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->

                <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/2.jpg">
                            <img alt="img" src="/assets/img/gallery/2.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->

                <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/3.jpg">
                            <img alt="img" src="/assets/img/gallery/3.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->

                <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/4.jpg">
                            <img alt="img" src="/assets/img/gallery/4.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->

                <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/5.jpg">
                            <img alt="img" src="/assets/img/gallery/5.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->  

                <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/6.jpg">
                            <img alt="img" src="/assets/img/gallery/6.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->

                <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/7.jpg">
                            <img alt="img" src="/assets/img/gallery/7.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->

                <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/8.jpg">
                            <img alt="img" src="/assets/img/gallery/8.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->

                <!-- start single gallery image --> */}
                    <div className="mu-single-gallery col-md-4">
                      <div className="mu-single-gallery-item">
                        <figure className="mu-single-gallery-img">
                          <a
                            className="mu-imglink"
                            href="/assets/img/gallery/9.jpg">
                            <img alt="img" src="/assets/img/gallery/9.jpg" />
                            <div className="mu-single-gallery-info">
                              <img
                                className="mu-view-btn"
                                src="/assets/img/plus.png"
                                alt="plus icon img"
                              />
                            </div>
                          </a>
                        </figure>
                      </div>
                    </div>
                    {/* <!-- End single gallery image -->   */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Gallery -->
  
  <!-- Start Client Testimonial section --> */}
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
                    <ul className="mu-testimonial-slider">
                      <li>
                        <div className="mu-testimonial-single">
                          <div className="mu-testimonial-info">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Cupiditate consequuntur ducimus
                              cumque iure modi nesciunt recusandae eligendi
                              vitae voluptatibus, voluptatum tempore, ipsum nisi
                              perspiciatis. Rerum nesciunt fuga ab natus,
                              dolorem?
                            </p>
                          </div>
                          <div className="mu-testimonial-bio">
                            <p>- David Muller</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mu-testimonial-single">
                          <div className="mu-testimonial-info">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Cupiditate consequuntur ducimus
                              cumque iure modi nesciunt recusandae eligendi
                              vitae voluptatibus, voluptatum tempore, ipsum nisi
                              perspiciatis. Rerum nesciunt fuga ab natus,
                              dolorem?
                            </p>
                          </div>
                          <div className="mu-testimonial-bio">
                            <p>- David Muller</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="mu-testimonial-single">
                          <div className="mu-testimonial-info">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Cupiditate consequuntur ducimus
                              cumque iure modi nesciunt recusandae eligendi
                              vitae voluptatibus, voluptatum tempore, ipsum nisi
                              perspiciatis. Rerum nesciunt fuga ab natus,
                              dolorem?
                            </p>
                          </div>
                          <div className="mu-testimonial-bio">
                            <p>- David Muller</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Client Testimonial section -->
  
  <!-- Start Chef Section --> */}
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
                  <ul className="mu-chef-nav">
                    <li>
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
                    </li>

                    <li>
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
                    </li>

                    <li>
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
                    </li>

                    <li>
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
                    </li>

                    <li>
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
                    </li>

                    <li>
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
                    </li>

                    <li>
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
                    </li>

                    <li>
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Chef Section -->

 

  <!-- Start Contact section --> */}
      <section id="mu-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-contact-area">
                <div className="mu-title">
                  <span className="mu-subtitle">Get In Touch</span>
                  <h2>Contact Us</h2>
                </div>

                <div className="mu-contact-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mu-contact-left">
                        {/* <!-- Email message div --> */}
                        <div id="form-messages"></div>
                        {/* <!-- Start contact form --> */}
                        <form
                          id="ajax-contact"
                          method="post"
                          action="mailer.php"
                          className="mu-contact-form">
                          <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              name="subject"
                              placeholder="Subject"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                              className="form-control"
                              id="message"
                              name="message"
                              cols="30"
                              rows="10"
                              placeholder="Type Your Message"
                              required></textarea>
                          </div>
                          <button type="submit" className="mu-send-btn">
                            Send Message
                          </button>
                        </form>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mu-contact-right">
                        <div className="mu-contact-widget">
                          <h3>Office Address</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Mollitia temporibus corporis ea non
                            consequatur porro corrupti hic voluptatibus
                            assumenda, doloribus.
                          </p>
                          <address>
                            <p>
                              <i className="fa fa-phone"></i> (850) 457 6688
                            </p>
                            <p>
                              <i className="fa fa-envelope-o"></i>
                              contact@markups.io
                            </p>
                            <p>
                              <i className="fa fa-map-marker"></i>368 St. Panama
                              City, Florida, USA
                            </p>
                          </address>
                        </div>
                        <div className="mu-contact-widget">
                          <h3>Open Hours</h3>
                          <address>
                            <p>
                              <span>Monday - Friday</span> 9.00 am to 12 pm
                            </p>
                            <p>
                              <span>Saturday</span> 9.00 am to 10 pm
                            </p>
                            <p>
                              <span>Sunday</span> 10.00 am to 12 pm
                            </p>
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact section --> */}

      {/* <!-- Start Map section --> */}
      <section id="mu-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9207.358598888495!2d-85.64847801496286!3d30.183918972289003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x2320479d70eb6202!2sDillard&#39;s!5e0!3m2!1sbn!2sbd!4v1462359735720"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen></iframe>
      </section>
      {/* <!-- End Map section --> */}
    </Layout>
  )
}
