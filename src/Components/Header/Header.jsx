import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
//* Icons
import { IoCall, IoMailSharp, IoLogoTwitter, IoLogoInstagram, IoLogoFacebook, IoSearchSharp } from "react-icons/io5"
import { AiOutlineMinus } from "react-icons/ai"
//* CSS
import './CSS/Header.scss'








function Header() {
  const navigate = useNavigate()




  return (
    <header>
      <nav>
        <div id='manage-top-head'>
          <section id='manage-firstBox-head'>
            <div id='manage-address'>
              <section id='address'>
                <a href="tel:5551234567">
                  <IoCall id='icon-call' />
                  <span>تلفن (555)123-4567</span>
                </a>
                <AiOutlineMinus id='Vertical-line' />
                <a href="mailto: abc@example.com">
                  <IoMailSharp id='email' />
                  <span>پست الکترونیک @example.com</span>
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
            <Link to='/'>
              <span>Medical</span>
              <span>-</span>
              <span>Center</span>
            </Link>
            <form action="" className="input-group h-75">
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
              <MDBBtn id="login-register">ورود / ثبت نام</MDBBtn>
            </li>
            <li>
              <input type="radio" name="menu" id='one' defaultChecked />
              <label htmlFor="one" onClick={() => navigate('/', { replace: true })}>خانه</label>
            </li>
            <li>
              <input type="radio" name="menu" id='two' />
              <label htmlFor="two" onClick={() => navigate('/About', { replace: true })}>درباره ما</label>
            </li>
            <li>
              <input type="radio" name="menu" id='three' />
              <label htmlFor="three" onClick={() => navigate('/Doctors', { replace: true })}>دکتر ها</label>
            </li>
            <li>
              <input type="radio" name="menu" id='four' />
              <label htmlFor="four" onClick={() => navigate('/News', { replace: true })}>اخبار</label>
            </li>
            <li>
              <input type="radio" name="menu" id='five' />
              <label htmlFor="five" onClick={() => navigate('/Contacts', { replace: true })}>مخاطب ها</label>
            </li>
          </ul>
        </div>
      </nav>
    </header >
  )
}


export default Header