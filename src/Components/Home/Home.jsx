import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoChatbubblesOutline, IoBasketSharp, IoShieldCheckmarkSharp } from "react-icons/io5"
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
//* Icons
import { IoCall, IoLogoWhatsapp, IoTime } from "react-icons/io5"
//* CSS
import './CSS/Home.scss'
//* Image
import bgDoctor from './Image/bg-doctor.png'
import doctor_1 from './Image/doctors/doctor_1.jpg'
import doctor_2 from './Image/doctors/doctor_2.jpg'
import doctor_3 from './Image/doctors/doctor_3.jpg'
import blog_1 from './Image/blog/blog_1.jpg'
import blog_2 from './Image/blog/blog_2.jpg'
import blog_3 from './Image/blog/blog_3.jpg'
import person_1 from './Image/person/person_1.jpg'
import person_2 from './Image/person/person_2.jpg'
import mobile_app from './Image/mobile_app.png'
import google_play from './Image/google_play.svg'
import app_store from './Image/app_store.svg'





function Home() {
    return (
        <div id='manage-Home'>
            <div id='hero-section'>
                <Zoom>
                    <section id='box-one'>
                        <span className="subhead">بیایید زندگی شما را شادتر کنیم</span>
                        <h1 className="display-4">زندگی سالم</h1>
                        <Link to="#" className='btn-primary mx-auto'>بیایید مشورت کنیم</Link>
                    </section>
                </Zoom>

                <Slide center bottom>
                    <div id='page-section1'>
                        <section id='box1'>
                            <div id='icon-chat'>
                                <IoChatbubblesOutline id='Chatbubble' />
                            </div>
                            <p>با یک پزشک چت کنید</p>
                        </section>
                        <section id='box2'>
                            <div id='icon-shield'>
                                <IoShieldCheckmarkSharp id='shield' />
                            </div>
                            <p>حفاظت از یک سلامت</p>
                        </section>
                        <section id='box3'>
                            <div id='icon-basket'>
                                <IoBasketSharp id='basket' />
                            </div>
                            <p>داروخانه تک سلامت</p>
                        </section>
                    </div>
                </Slide>
            </div>

            <div id='page-section2'>
                <Fade right>
                    <img src={bgDoctor} alt="This is a doctor" />
                </Fade>

                <Fade left big>
                    <article>
                        <h1>به مرکز سلامت خود خوش آمدید</h1>.
                        <Fade left big cascade>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!
                            </p>
                        </Fade>
                        <Link to="#" className='btn-primary mx-auto'>بیشتر بدانید</Link>
                    </article>
                </Fade>
            </div>

            <div id='page-section3'>
                <Fade top>
                    <h1 align="center">پزشکان ما</h1>
                </Fade>

                <Fade bottom>
                    <div id='cards-Doctors'>
                        <section id='card-one'>
                            <div id='pic-card'>
                                <img src={doctor_1} alt="Doctor one" />
                                <div id='social-doctor'>
                                    <section id='icon-call'>
                                        <IoCall />
                                    </section>
                                    <section id='icon-whatsapp'>
                                        <IoLogoWhatsapp />
                                    </section>
                                </div>
                            </div>

                            <article>
                                <h1>Dr. Stein Albert</h1>
                                <p>Cardiology</p>
                            </article>
                        </section>

                        <section id='card-two'>
                            <div id='pic-card'>
                                <img src={doctor_2} alt="Doctor one" />
                                <div id='social-doctor'>
                                    <section id='icon-call'>
                                        <IoCall />
                                    </section>
                                    <section id='icon-whatsapp'>
                                        <IoLogoWhatsapp />
                                    </section>
                                </div>
                            </div>

                            <article>
                                <h1>Dr. Alexa Melvin</h1>
                                <p>Dental</p>
                            </article>
                        </section>

                        <section id='card-three'>
                            <div id='pic-card'>
                                <img src={doctor_3} alt="Doctor one" />
                                <div id='social-doctor'>
                                    <section id='icon-call'>
                                        <IoCall />
                                    </section>
                                    <section id='icon-whatsapp'>
                                        <IoLogoWhatsapp />
                                    </section>
                                </div>
                            </div>

                            <article>
                                <h1>Dr. Rebecca Steffany</h1>
                                <p>General Health</p>
                            </article>
                        </section>
                    </div>
                </Fade>
            </div>

            <div id="page-section4">
                <Fade top>
                    <h1>آخرین خبرها</h1>
                </Fade>
                <Zoom>
                    <div id='cards-news'>
                        <section id='card-one'>
                            <section id='image'>
                                <img src={blog_1} alt="" />
                                <p>Covid19</p>
                            </section>
                            <section id='text-card'>
                                <h1>List of Countries without Coronavirus case</h1>
                                <section id='info'>
                                    <img src={person_1} alt="" />
                                    <p>Roger Adams</p>
                                    <section>
                                        <p> 1 week ago</p>
                                        <IoTime />
                                    </section>
                                </section>
                            </section>
                        </section>

                        <section id='card-two'>
                            <section id='image'>
                                <img src={blog_2} alt="" />
                                <p>Covid19</p>
                            </section>
                            <section id='text-card'>
                                <h1>List of Countries without Coronavirus case</h1>
                                <section id='info'>
                                    <img src={person_1} alt="" />
                                    <p>Roger Adams</p>
                                    <section>
                                        <p> 1 week ago</p>
                                        <IoTime />
                                    </section>
                                </section>
                            </section>
                        </section>

                        <section id='card-three'>
                            <section id='image'>
                                <img src={blog_3} alt="" />
                                <p>Covid19</p>
                            </section>
                            <section id='text-card'>
                                <h1>List of Countries without Coronavirus case</h1>
                                <section id='info'>
                                    <img src={person_2} alt="" />
                                    <p>Roger Adams</p>
                                    <section>
                                        <p> 1 week ago</p>
                                        <IoTime />
                                    </section>
                                </section>
                            </section>
                        </section>
                    </div>
                    <a className="btn-primary mx-auto" href="/">بیشتر بدانید</a>
                </Zoom>
            </div>

            <div id="page-section5">
                <Flip bottom cascade>
                    <h1>Make an Appointment</h1>
                </Flip>

                <form className="main-form">
                    <div className="row mt-5 ">
                        <Fade left>
                            <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                                <input type="text" className="form-control" placeholder="Full name" />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-12 col-sm-6 py-2 wow fadeInRight">
                                <input type="text" className="form-control" placeholder="Email address.." />
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="col-12 col-sm-6 py-2 wow fadeInLeft" data-wow-delay="300ms" >
                                <input type="date" className="form-control" />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms">
                                <select name="departement" id="departement" className="custom-select">
                                    <option value="general">General Health</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="dental">Dental</option>
                                    <option value="neurology">Neurology</option>
                                    <option value="orthopaedics">Orthopaedics</option>
                                </select>
                            </div>
                        </Fade>
                        <Slide bottom>
                            <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                <input type="text" className="form-control" placeholder="Number.." />
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                <textarea name="message" id="message" className="form-control" rows="6" placeholder="Enter message.."></textarea>
                            </div>
                        </Slide>
                    </div>
                    <Zoom bottom>
                        <button type="submit" className="btn btn-primary mt-3 wow zoomIn">ارسال درخواست</button>
                    </Zoom>
                </form>
            </div >

            <div id="page-section6">
                <Zoom>
                    <img src={mobile_app} alt="" id='mobile-app' />
                </Zoom>
                <Fade right>
                    <section>
                        <h1>Get easy access of all features using One Health Application</h1>
                        <section id='appstore-googleplay'>
                            <img src={app_store} alt="" />
                            <img src={google_play} alt="" />
                        </section>
                    </section>
                </Fade>
            </div>
        </div >
    )
}


export default Home