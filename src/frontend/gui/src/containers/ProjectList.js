import React from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import * as data from '../defaultSource.json';

import Project from '../components/Project';

class ProjectList extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        axios.get(`${data.source}/api/`)
            .then(res => {
                this.setState({
                    projects: res.data
                });
            })
    }
    
    render() {
        return (
            <Masonry className={'row'}>
                {this.state.projects.map((val, key) => (
                    <Project data={val} key={key}/>
                ))}
            </Masonry>
        )
    }
}

export default ProjectList;