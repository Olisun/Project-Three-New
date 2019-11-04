import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Tooltip, Label, Text, ResponsiveContainer, Legend} from 'recharts';
import "./style.css";

// The data array below is where the user input data will go. The data items below are strictly for demo purposes.

let data = [
  { name: 'Monthly Income', value: 5000 },
  { name: 'Rent', value: 2000 },
  { name: 'Utilities', value: 300 },
  { name: 'Food', value: 1200 },
  { name: 'Transporation', value: 200 },
  { name: 'Miscellandeous', value: 200 },
  { name: 'Month-end Balance', value: 900 },
  
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#f24b7a', '#d3f93e', '#3e4af9'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class Rechart extends PureComponent {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
      list: data,
      isToggled: {
        status: false,
        value: []
     }
   }
  }

  onPieEnter = (data, index) => {
    this.setState({ activeIndex: index })
  };

  onToggle = event => {
    if (this.state.isToggled.status) {
      this.setState({
        isToggled: { status: false, value: [] }
      });
      return;
    }
    const { payload } = event;
    const groupName = payload.name;
    const { list } = this.state;
    const newList = data.filter(item => {
      const firstLetter = item.name.substr(0, 1);
      if (firstLetter === groupName.substr(groupName.length - 1)) {
        return item;
      }
    });
    this.setState({
      isToggled: { status: true, value: newList }
    });
  };

  render() {
    const { activeIndex, list } = this.state;
    const { status, value } = this.state.isToggled;
    return (
      <div className="test">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={165}
            cy={160}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#black"
            dataKey="value"
            onClick={this.onToggle}
            activeIndex={activeIndex}
            onMouseEnter={this.onPieEnter}
           >
           {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
           }
          </Pie>
          <Tooltip />
          <Label />
          <Text />
          <Legend />
          <ResponsiveContainer />
       </PieChart>
      </div>
    );
  }
}

export default Rechart;