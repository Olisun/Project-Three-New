import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {

	labels: [
		"Rent",
		"Utilities",
		"Food",
		"Transportation",
		"Misc",
		"Allowance"
	],
	datasets: [
		{
			data: [4000, 1000, 100, 100, 50, 0],
			backgroundColor: [
				'red',
				'yellow',
				'blue',
				'purple',
				'orange',
				'green'
			],
			hoverBackgroundColor: [
				'red',
				'yellow',
				'blue',
				'purple',
				'orange',
				'green'
			],
			label: "Pie 1"
		},
		{
			data: [0, 0, 0, 0, 0, 1000],
			backgroundColor: [
				'red',
				'yellow',
				'blue',
				'purple',
				'orange',
				'green'
			],
			hoverBackgroundColor: [
				'red',
				'yellow',
				'blue',
				'purple',
				'orange',
				'green'
			],
			label: "Pie 2"
		}
	]
};

class Chart2 extends Component {
	render() {

		return (
			<div>
				<h2>Pie Example</h2>
				<Pie 
					data={data} 
					height={1}
					width={1}
				/>
			</div>
		);
	}
};

export default Chart2


