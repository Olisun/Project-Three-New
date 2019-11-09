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
								'#c9b8d3',
								'#d3ceb8',
								'#d3c0b8',
								'#b8d3c0',
								'#7da8ba'
							],
							hoverBackgroundColor: [
								'purple',
								'tan',
								'orange',
								'green',
								'blue'
							],
							label: "Expenses"
						}
					]
				}} />

				<p>Your Income: ${this.props.income}</p>
				<p>Your Total Expenses: ${this.props.expenses}</p>
				<p>Your Allowance: ${this.props.allowance}</p>
			</div>
		);
	}
};

export default Chart2


