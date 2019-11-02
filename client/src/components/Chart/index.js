import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import "./style.css"

const data = [
  { name: 'monthlyIncome', value: 5000 },
  { name: 'rentOrMortgage', value: 2000 },
  { name: 'utilities', value: 300 },
  { name: 'food', value: 1200 },
  { name: 'transportation', value: 200 },
  { name: 'misc', value: 200 },
  { name: 'monthEndBal', value: 900 },
  
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
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
  render() {
    return (
      <div className="test">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
           cx={200}
           cy={200}
           labelLine={true}
           label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
           {
             data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
           }
         </Pie>
        </PieChart>
      </div>
    );
  }
}

export default Rechart;