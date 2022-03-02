import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoCall, IoMailSharp, IoLogoTwitter, IoLogoInstagram, IoLogoFacebook, IoSearchSharp } from "react-icons/io5"
import { AiOutlineMinus } from "react-icons/ai"
import { MDBBtn } from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
//* CSS
import './CSS/Header.scss'







function Header() {
  return (
    <header>
      <nav>
        <div id='manage-top-head'>
          <section id='manage-firstBox-head'>
            <div id='manage-address'>
              <section id='address'>
                <a href="tel:5551234567">
                  <IoCall id='icon-call' />
                  <span>Call (555)123-4567</span>
                </a>
                <AiOutlineMinus id='Vertical-line' />
                <a href="mailto: abc@example.com">
                  <IoMailSharp id='email' />
                  <span>mail@example.com</span>
                </a>
              </section>
              <section id='social-media'>
                <Link to="https://en-gb.facebook.com"><IoLogoFacebook /></Link>
                <Link to="https://instagram.com"><IoLogoInstagram /></Link>
                <Link to="https://twitter.com"><IoLogoTwitter /></Link>
              </section>
            </div>
          </section>
        </div>

        <div id='manage-twoBox-head'>
          <section id='form'>
            <article>
              <span>Medical</span>
              <span>-</span>
              <span>Center</span>
            </article>
            <form action="" class="input-group h-75">
              <span className="input-group-text" id="basic-addon1"><IoSearchSharp id='icon-search' /></span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter keyword..."
                aria-label="Username" aria-describedby="basic-addon1"
              />
            </form>
          </section>

          <ul id='menu'>
            <li>
              <MDBBtn id="login-register">Login / Register</MDBBtn>
            </li>
            <li>
              <input type="radio" name="menu" id='one' defaultChecked />
              <label htmlFor="one">خانه</label>
            </li>
            <li>
              <input type="radio" name="menu" id='two' />
              <label htmlFor="two">درباره ما</label>
            </li>
            <li>
              <input type="radio" name="menu" id='three' />
              <label htmlFor="three">دکتر ها</label>
            </li>
            <li>
              <input type="radio" name="menu" id='four' />
              <label htmlFor="four">اخبار</label>
            </li>
            <li>
              <input type="radio" name="menu" id='five' />
              <label htmlFor="five">مخاطب ها</label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}


export default Header