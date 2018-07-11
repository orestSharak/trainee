import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <ul className="nav bg-dark fixed-top justify-content-center">
                            <li className="nav-item"><Link className="nav-link" to="/">Native js example</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/example">Ajax request example</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
