import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Require from 'superagent';

class getAPI extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ranking: 'recent'
		}
	}



	render() {
		console.log('hello world')
		return (
			<div>
				Hello World!!!
			</div>
		)
	}
}

export default getAPI;