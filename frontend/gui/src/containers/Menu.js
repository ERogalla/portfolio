import React from 'react';

class Menu extends React.Component  {
    render() {
        return (
            <div className="small-navbar d-flex d-md-none">
                <button type="button" className="btn btn-outline-primary" onClick={this.props.ToggleClass}> <i className="fa fa-align-left mr-2"></i>Menu</button>
                <h1 className="small-navbar-heading"> <a href="/">Emilio</a></h1>
            </div>
        )
    }
}

export default Menu;