import React from 'react';

const Menu = () => {
    return (
        <div className="small-navbar d-flex d-md-none">
            <button type="button" data-toggle="offcanvas" className="btn btn-outline-primary"> <i className="fa fa-align-left mr-2"></i>Menu</button>
            <h1 className="small-navbar-heading"> <a href="index.html">Emilio</a></h1>
        </div>
    )
}

export default Menu