import React, {Component} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faChevronCircleDown, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";

library.add(fab, faChevronCircleDown,faPlayCircle);

class Example extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/orestSharak/901bad8e713b6aade71d67ce2fa636c9/raw/5805f562c8e634fd0b54ef7191182bae6f5357cb/myDatasFile.json')
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    data: result.datas
                })
            })
            .catch(error => (console.log('fetch failed', error)))
    }

    render() {
        let items = this.state.data;
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
                            <div>
                                {items.map((item, index) =>
                                    <Item key={index} item={item}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/*------------   Footer   ------------*/}

                <Footer/>
            </div>
        );
    }
}

const Item = (props) =>
    <div>
        <img className="image-full-width" src={props.item.img}/>
        <div className="col-lg-8  offset-lg-2
                                   col-md-10 offset-md-1
                                    col-sm-10 offset-sm-1
                                    col-12 offset-0
                                    position-relative wrapper ">
            <span className="date-block">{props.item.date}</span>
            <h1>{props.item.title}</h1>
            <p>{props.item.description}</p>

            {/*  suppose to be video, I guess :) */}

            <img className="img-fluid image-video" src={props.item.img}/>
        </div>
    </div>
;

export default Example;
