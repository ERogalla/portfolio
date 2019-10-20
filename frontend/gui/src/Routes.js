import React from 'react';
import { Route } from 'react-router-dom';
import ProjectList from './containers/ProjectList';
import ProjectDetail from './containers/ProjectDetail';
import About from './containers/About';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ProjectList} />
        <Route exact path='/about/' component={About} />
        <Route exact path='/:projectID/' component={ProjectDetail} />
    </div>
);

export default BaseRouter;