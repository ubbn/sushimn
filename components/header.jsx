import React from 'react'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const onClick = () => {
    setOpen(v => !v)
  }

  return (
    <header id="mu-header">
      <nav className="navbar navbar-default mu-main-navbar" role="navigation">
        <div className="container">
          <div className="navbar-header">
            {/* <!-- FOR MOBILE VIEW COLLAPSED BUTTON --> */}
            <button
              onClick={onClick}
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            {/* <!-- LOGO -->        */}

            {/* <!--  Text based logo  --> */}
            <a className="navbar-brand" href="index.html">
              Sushi<span>MN</span>
            </a>

            {/* <!--  Image based logo  -->
                  <!-- <a className="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="Logo img"></a>  --> */}
          </div>
          <div
            id="navbar"
            className={`navbar-collapse collapse${open ? 'd' : ''}`}>
            <ul
              id="top-menu"
              className="nav navbar-nav navbar-right mu-main-nav">
              <li onClick={() => setOpen(false)}>
                <a href="#home">HOME</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#mu-about-us">ABOUT US</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#mu-restaurant-menu">MENU</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#mu-reservation">RESERVATION</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#mu-gallery">GALLERY</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#mu-chef">OUR CHEFS</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#mu-contact">CONTACT</a>
              </li>
            </ul>
          </div>
          {/* <!--/.nav-collapse -->        */}
        </div>
      </nav>
    </header>
  )
}
