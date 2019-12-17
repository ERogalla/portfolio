import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import BaseRouter from './Routes';
import Layout from './containers/Layout';

import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/owl.carousel/assets/owl.carousel.css';
import './vendor/owl.carousel/assets/owl.theme.default.css';
import './css/style.blue.css';
import './css/custom.css';

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
