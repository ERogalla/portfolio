import React from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';

class ProjectDetail extends React.Component {
    state = {
        article: {}
    }

    componentDidMount() {
        const projectID = this.props.match.params.projectID;
        axios.get(`http://127.0.0.1:8000/api/${projectID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
            })
    }

    handeledDelete = (event) => {
        const projectID = this.props.match.params.projectID;
        axios.delete(`http://127.0.0.1:8000/api/${projectID}/`);

    }


    render() {   
        return (
            <div id="all">
                <div className="container-fluid">
                    <div className="row row-offcanvas row-offcanvas-left"> 
                        <Sidebar />
                        <div className="col-md-8 col-lg-9 content-column">
                        {this.state.article.title}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetail;