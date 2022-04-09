import React from "react";
import logo from "../images/logo.png";
import bgcar from "../images/img_car.png";

function Header() {
  return (
    <div className="Header">
      <div class="header container-fluid" id="navigasi">
        <nav class="navbar nav navbar-expand-lg ">
          <div class="container">
            <a href="#navigasi">
              <img src={logo} alt="logo" />
            </a>
            <div class="button btn-info">
              <button
                class="navbar-toggler dropdown-toggle bg-transparant border"
                type="button"
                value="menu"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse justify-content-end menu" id="navbarNav">
              <ul class="navbar-nav menu">
                <li class="menu_item">
                  <a href="#whyus">Why Us</a>
                </li>
                <li class="menu_item">
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li class="menu_item">
                  <a href="#faq">FAQ</a>
                </li>
                <li class="menu_item">
                  <a href="#service">Our Services</a>
                </li>
              </ul>
              <button>Register</button>
            </div>
          </div>
        </nav>

        <div class="container">
          <div class="main">
            <div class="row g-0 align-items-center">
              <div class="col-12 col-md-6 px-2 pe-md-5 cell-1">
                <div class="main_desc">
                  <h1>Sewa dan Rental Mobil Terbaik di kawasan Surabaya</h1>
                  <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
              </div>
              <div class="col-12 col-md-6 cell-2">
                <div class="main_img position-relative mt-3 mt-md-0">
                  <img src={bgcar} class="car_img img-fluid" alt="car" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
