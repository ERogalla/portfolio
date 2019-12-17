import React from 'react';
import axios from 'axios';

import Project from '../components/Project';

class ProjectList extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api')
            .then(res => {
                this.setState({
                    projects: res.data
                });
                console.log(res.data)
            })
    }

    render() {
        return (
            <div className="grid row">
                {this.state.projects.map((val, index) => (
                    <Project data={val} />
                ))}
            </div>
        )
    }
}

export default ProjectList;