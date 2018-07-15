import React, {Component, PropTypes} from 'react';
import Table from './table.js'
import Style from '../../sass/style.scss';

var drinkStore = [];

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	};
	
	render() {
		return(
			<div className='drinkMenu'>
				<Table />
			</div>
		)
	};
}

// PropTypes 驗證，若傳入的 props type 不符合將會顯示錯誤
Menu.propTypes = {

}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
Menu.defaultProps = {

}

export default Menu;