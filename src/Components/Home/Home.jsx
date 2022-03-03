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

            </div>
        </div >
    )
}


export default Home