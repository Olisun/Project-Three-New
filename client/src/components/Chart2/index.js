import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class Chart2 extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<h2>Your Expenses</h2>
				<Pie data={{

					labels: [
						"Rent",
						"Utilities",
						"Food",
						"Transportation",
						"Misc"
					],
					datasets: [
						{
							data: [this.props.rent, this.props.util, this.props.groceries, this.props.travel, this.props.miscellaneous],
							backgroundColor: [
								'red',
								'yellow',
								'blue',
								'purple',
								'orange'
							],
							hoverBackgroundColor: [
								'red',
								'yellow',
								'blue',
								'purple',
								'orange'
							],
							label: "Expenses"
						}
					]
				}} />

				<p>Your Income: {this.props.income}</p>
				<p>Your Total Expenses: {this.props.expenses}</p>
				<p>Your Allowance: {this.props.allowance}</p>
			</div>
		);
	}
};

export default Chart2


