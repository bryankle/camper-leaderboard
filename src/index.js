import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Require from 'superagent';
import Test from './components/test';
//import Leaderboard from '.components/leaderboard'

class App extends Component {

	constructor(props) {
		super(props)
		this.state ={
			ranking: 'recent',
			data: null,
			recent: null,
			all: null
		}
	}

	componentDidMount() {
		console.log('componentDidMount')
		let currentRanking = this.state.ranking; // Reference to parent state ranking
		const URL1 = `https://fcctop100.herokuapp.com/api/fccusers/top/recent`;
		const URL2 = `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`;
		Require.get(URL1).then((response) => {
			return this.setState({recent: response.body})
		});
		Require.get(URL2).then((response) => {
			return this.setState({all: response.body})
		});
	}

	render () {
		if (this.state.recent) {
			console.log('index render')
			return (
				<div>
					<Test 
						ranking={this.state.ranking}
						data={this.state.data}
						recent={this.state.recent}
						all={this.state.all}
						onRankingSelect={ranking => this.setState({ranking})}		
					/>
				</div>
			);
		}
		return (
			<div>Loading...</div>
		)
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));

