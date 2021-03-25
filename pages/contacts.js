import React from 'react'

export default function Contacts() {
  return (
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
                          elit. Mollitia temporibus corporis ea non consequatur
                          porro corrupti hic voluptatibus assumenda, doloribus.
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
  )
}
