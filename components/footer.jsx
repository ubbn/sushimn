import React from 'react'

export default function Footer() {
  return (
    <footer id="mu-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-footer-area">
              <div className="mu-footer-social">
                <a href="#">
                  <span className="fa fa-facebook"></span>
                </a>
                <a href="#">
                  <span className="fa fa-twitter"></span>
                </a>
                <a href="#">
                  <span className="fa fa-google-plus"></span>
                </a>
                <a href="#">
                  <span className="fa fa-linkedin"></span>
                </a>
                <a href="#">
                  <span className="fa fa-youtube"></span>
                </a>
              </div>
              <div className="mu-footer-copyright">
                <p>
                  &copy; Copyright{' '}
                  <a rel="nofollow" href="http://markups.io">
                    SushiMN AB
                  </a>
                  . All right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
