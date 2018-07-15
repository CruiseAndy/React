import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu.js';
import FundsYESLogo from '../img/FundsYESLogo.png';
import Style from '../sass/style.scss';


class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	};
	render() {
		return (
			<div>
				<div><img src={FundsYESLogo}></img></div>
				<hr/>
				<Menu />
			</div>
		)
	};
}

ReactDOM.render(<App />, document.getElementById('app'));