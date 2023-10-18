import "./chart.scss"
import{
  ResponsiveContainer,
  BarChart,
  Bar,XAxis,
}
from 'recharts'

const data = [
  { name: "Jan", Total: 1200},
  { name: "Feb", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
  { name: "July", Total: 800 },
  { name: "August", Total: 1600 },
  { name: "Sept", Total: 900 },
  { name: "Nov", Total: 1700 },
  { name: "Dec", Total: 1700 },
];


const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <h1 style={{color:"black"}}>Overview</h1>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <BarChart data={data}  width={400} height={400}>
          <XAxis dataKey="name"/>
          <Bar dataKey="Total" fill="barColors"/>

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;