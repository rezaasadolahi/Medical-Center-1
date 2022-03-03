import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoChatbubblesOutline, IoBasketSharp, IoShieldCheckmarkSharp } from "react-icons/io5"
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
//* Icons
import { IoCall, IoLogoWhatsapp } from "react-icons/io5"
//* CSS
import './CSS/Home.scss'
//* Image
import bgDoctor from './Image/bg-doctor.png'
import doctor_1 from './Image/doctors/doctor_1.jpg'
import doctor_2 from './Image/doctors/doctor_2.jpg'
import doctor_3 from './Image/doctors/doctor_3.jpg'








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
        </div >
    )
}


export default Home