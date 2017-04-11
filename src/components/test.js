import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log('test update')
			let currentData = this.props.ranking == 'recent' ? this.props.recent : this.props.all;
			const camperNames = currentData.map((val, index) => {
				return (
					<tr key={ index }>
						<td>{index + 1}</td>
						<td>{val.username}</td>
						<td>{val.recent}</td>
						<td>{val.alltime}</td>
					</tr>
				);
			})
			return (
				<table>
					<tbody>
						<tr>
							<th colSpan='4'>Leaderboard</th>
						</tr>
						<tr>
							<th>#</th>
							<th>Camper Name</th>
							<th className="sort-category" onClick={() => {this.props.onRankingSelect('recent')}}>										
								Points in past 30 days
							</th>
							<th className="sort-category" onClick={() => {this.props.onRankingSelect('alltime')}}>
								All time points
							</th>
						</tr>
						{camperNames}
					</tbody>
				</table>
			)	
		

		return (
			<div>Loading...</div>
		)
		
	}

}



export default Test;
