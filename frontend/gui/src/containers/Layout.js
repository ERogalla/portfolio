import React from 'react';
import Sidebar from './Sidebar';
import Menu from './Menu';

class Layout extends React.Component {

    state = {
        sidebarIsActive: false,
    }

    ToggleClass = () => {
        this.setState({
            sidebarIsActive: !this.state.sidebarIsActive
        })
    }
 
    render() {
        return (
            <div id="all">
                <div className="container-fluid">
                    <div className={`row row-offcanvas row-offcanvas-left ${(this.state.sidebarIsActive) ? "active" : ""} `}> 
                        <Sidebar />
                        <div className="col-md-8 col-lg-9 content-column">
                            <Menu ToggleClass={this.ToggleClass}/>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;
