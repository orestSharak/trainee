import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { faLink, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';

library.add(fab,faLink, faChevronCircleDown);
class Footer extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex col-12
                        footer flex-column justify-content-between align-items-center">
                        <h2 className="footer-text">deel op social media</h2>
                        <div className="d-flex justify-content-center social-block">
                            <a className="social-btn" target="_blank" href="http://facebook.com"><FontAwesomeIcon
                                icon={['fab', 'facebook-f']} size="2x"/></a>
                            <a className="social-btn" target="_blank" href="http://twitter.com"><FontAwesomeIcon
                                icon={['fab', 'twitter']} size="2x"/></a>
                            <a className="social-btn" target="_blank" href="http://viber.com"><FontAwesomeIcon
                                icon={['fab', 'viber']} size="2x"/></a>
                            <a className="social-btn" target="_blank" href="http://viber.com"><FontAwesomeIcon
                                icon={faLink} size="2x"/></a>
                        </div>
                        <span className="footer-copyright">Copyright 2018</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
