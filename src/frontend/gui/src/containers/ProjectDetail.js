import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import * as data from '../defaultSource.json';

class ProjectDetail extends React.Component {
    state = {
        project: {}
    }

    componentDidMount() {
        const projectSlug = this.props.match.params.projectSlug;
        axios.get(`${data.source}/api/${projectSlug}/`)
            .then(res => {
                this.setState({
                    project: res.data
                });
                const readmePath = res.data.markdown;
                fetch(readmePath)
                .then(response => {
                    return response.text()
                })
                .then(text => {
                    this.setState({
                    markdown: text
                    })
                })
            })
        
    }

    handeledDelete = (event) => {
        const projectSlug = this.props.match.params.projectSlug;
        axios.delete(`${data.source}/api/${projectSlug}/`);

    }

    render() {   
        return (
            <ReactMarkdown source={this.state.markdown} />
        )
    }
}

export default ProjectDetail;