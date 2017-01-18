import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	render() {
		return (
			<ul className="list-group col-sm-4">
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);
