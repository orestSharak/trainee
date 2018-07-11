import React, {Component} from 'react';
import datas from '../api/Api';
import scrollToComponent from 'react-scroll-to-component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faChevronCircleDown, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";

library.add(fab, faChevronCircleDown, faPlayCircle);

class Home extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-12 first-banner d-flex flex-column justify-content-around  align-items-center">
                            <img className="logo" src="src/img/logo.png"/>
                            <img className="log-17" src="src/img/17.png"/>
                            <div
                                className="first-banner-text d-flex flex-column justify-content-around align-items-center">
                                <h2>de 17 belangrijkste</h2>
                                <h2>nieuwsmomenten van 2017</h2>
                                <h2>volgenus nu.nl</h2>
                            </div>
                            <span>Scroll om te lezen</span>
                            <FontAwesomeIcon className="chevron-down"
                                             onClick={() => scrollToComponent(this.News, {
                                                 offset: 0,
                                                 align: 'top',
                                                 duration: 800,
                                                 ease: 'inCirc'
                                             })}
                                             icon={faChevronCircleDown} size="2x"/>
                        </div>
                    </div>
                </div>
                {/*----------  section with  data  ----------*/}

                <div className="container news" ref={(section) => {
                    this.News = section;
                }}>
                    <div className="row">
                        <div className="col-lg-12">
                            {datas.map((data, index) =>
                                <div key={index}>
                                    <img className="image-full-width" src={data.img}/>
                                    <div className="col-lg-8  offset-lg-2
                                   col-md-10 offset-md-1
                                    col-sm-10 offset-sm-1
                                    col-12 offset-0
                                    position-relative wrapper ">
                                        <span className="date-block">{data.date}</span>
                                        <h1>{data.title}</h1>
                                        <p>{data.description}</p>

                                        {/*  suppose to be video, I guess :) */}

                                        <div className="position-relative">
                                            <img className="img-fluid image-video" src={data.img}/>
                                            <FontAwesomeIcon className="play-img" icon={faPlayCircle} size="3x"/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/*------------   Footer   ------------*/}

                <Footer/>
            </div>
        );
    }
}

export default Home;
