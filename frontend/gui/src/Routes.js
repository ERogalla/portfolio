import React from 'react';
import { Route } from 'react-router-dom';
import ProjectList from './containers/ProjectList';
import ProjectDetail from './containers/ProjectDetail';
import About from './containers/About';
import Contact from './containers/Contact';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ProjectList} />
        <Route exact path='/about/' component={About} />
        <Route exact path='/contact/' component={Contact} />
        <Route exact path='/:projectSlug/' component={ProjectDetail} />
    </div>
);

export default BaseRouter;