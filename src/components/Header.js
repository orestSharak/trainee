import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Example from './Example';
import Menu from './Menu';


class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu/>
                    <Route component={ScrollToTop}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/example" component={Example}/>
                </div>
            </Router>
        )
    }
}
const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};


export default Header;