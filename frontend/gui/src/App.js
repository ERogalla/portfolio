import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import BaseRouter from './Routes';
import Layout from './containers/Layout';

import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './css/style.default.css';


class App extends React.Component {
	render() {
		return (
			<Router>
				<Layout>
					<BaseRouter />
				</Layout>
			</Router>
		);
	}
}

export default App;
