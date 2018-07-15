import React, {Component, PropTypes} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ReactTableDefaults } from 'react-table'

class Table extends Component {
	constructor(props) {
	  super(props);
	
		this.state = {};
		
		Object.assign(ReactTableDefaults, {
			defaultPageSize: 10,
			// minRows: 10,
			// etc... 
		})
	};
	
	render() {
		const data = [{
			name: 'Tanner Linsley',
			age: 26,
			friend: {
				name: 'Jason Maurer',
				age: 23,
			}
		}, {
			name: 'kevin Linsley',
			age: 30,
			friend: {
				name: 'mark Maurer',
				age: 31,
			}
		}];

		const columns = [{
			Header: 'Name',
			accessor: 'name'
		}, {
			Header: 'Age',
			accessor: 'age',
			Cell: props => <span className='number'>{props.value}</span>
		}, {
			id: 'friendName',
			Header: 'Friend Name',
			accessor: d => d.friend.name
		}, {
			Header: props => <span>Friend Age</span>,
			accessor: 'friend.age'
		}];

		return (
			<ReactTable data={data} columns={columns} />
		)
	};
}

// PropTypes 驗證，若傳入的 props type 不符合將會顯示錯誤
Table.propTypes = {
	
}

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
Table.defaultProps = {
	
}

export default Table;