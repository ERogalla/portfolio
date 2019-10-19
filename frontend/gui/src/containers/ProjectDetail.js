import React from 'react';

const ProjectDetail = () => {
    return (
        <div id="all">
            <div className="container-fluid">
                <div className="row row-offcanvas row-offcanvas-left"> 
                    <Sidebar />
                    <div className="col-md-8 col-lg-9 content-column">
                        <div className="small-navbar d-flex d-md-none">
                            <button type="button" data-toggle="offcanvas" className="btn btn-outline-primary"> <i className="fa fa-align-left mr-2"></i>Menu</button>
                            <h1 className="small-navbar-heading"> <a href="/">Creative </a></h1>
                        </div>
                        <div className="grid row">
                            {this.state.projects.map((val, index) => (
                                <Project data={val} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;