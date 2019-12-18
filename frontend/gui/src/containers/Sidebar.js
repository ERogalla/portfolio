import React from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {

    render() {
        return (
            <div id="sidebar" className="col-md-4 col-lg-3 sidebar-offcanvas"  >
                <div className="sidebar-content">
                    <h1 className="sidebar-heading"> <a href="/">Hi! I'm Emilio</a></h1>
                    <p className="sidebar-p">Computer Science Student at UT </p>
                    <p className="sidebar-p">Originally from Dallas, now in Austin </p>
                    <p className="sidebar-p">Longhorn <span role="img" aria-label="sheep">🤘</span></p>

                    <ul className="sidebar-menu">
                        <li className="sidebar-item"><NavLink exact to="/" className="sidebar-link" activeClassName="active">Home</NavLink></li>
                        <li className="sidebar-item"><NavLink exact to="/about/" className="sidebar-link" activeClassName="active">About</NavLink></li>                                      
                        <li className="sidebar-item"><NavLink exact to="/contact/" className="sidebar-link" activeClassName="active">Get in touch</NavLink></li>
                    </ul>
                    <p className="social"><a href="/" data-animate-hover="pulse" className="external facebook"><i className="fa fa-facebook"></i></a><a href="/" data-animate-hover="pulse" className="external gplus"><i className="fa fa-google-plus"></i></a><a href="/" data-animate-hover="pulse" className="external twitter"><i className="fa fa-twitter"></i></a><a href="/" title="" className="external instagram"><i className="fa fa-instagram"></i></a><a href="/" data-animate-hover="pulse" className="email"><i className="fa fa-envelope"></i></a></p>
                    <div className="copyright text-center text-md-left">
                        <p className="credit">&copy;2019 Emilio Rogalla </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;