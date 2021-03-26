import React from 'react'

export default function Counter() {
  return (
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
  )
}
