import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoChatbubblesOutline, IoBasketSharp, IoShieldCheckmarkSharp } from "react-icons/io5"
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
//* CSS
import './CSS/Home.scss'







function Home() {
    return (
        <div id='manage-Home'>
            <div id='hero-section'>
                <Zoom>
                    <section id='box-one'>
                        <span class="subhead">Let's make your life happier</span>
                        <h1 class="display-4">Healthy Living</h1>
                        <Link to="#" className='btn-primary mx-auto'>Let's Consult</Link>
                    </section>
                </Zoom>

                <Slide center bottom>
                    <div id='page-section1'>
                        <section id='box1'>
                            <div id='icon-chat'>
                                <IoChatbubblesOutline id='Chatbubble' />
                            </div>
                            <p>Chat with a doctors</p>
                        </section>
                        <section id='box2'>
                            <div id='icon-shield'>
                                <IoShieldCheckmarkSharp id='shield' />
                            </div>
                            <p>One-Health Protection</p>
                        </section>
                        <section id='box3'>
                            <div id='icon-basket'>
                                <IoBasketSharp id='basket' />
                            </div>
                            <p>One-Health Pharmacy</p>
                        </section>
                    </div>
                </Slide>
            </div>



            <div id='page-section2'>

            </div>
        </div >
    )
}


export default Home