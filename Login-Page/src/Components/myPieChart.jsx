import { ResponsiveContainer, Cell, PieChart, PolarAngleAxis, PolarRadiusAxis, PolarGrid, Pie, Legend} from 'recharts'


const data01 = [
    {
      "name": "Group A",
      "value": 200,
      fill: "#94C5CC"
    },
    {
      "name": "Group B",
      "value": 278,
      fill: "#3B3355"
    }
  ];
  
  function myPieChart() {
  
    return (
      <>
        <ResponsiveContainer height={80} aspect={1}>
          <PieChart width={80} height={80}>
            <PolarAngleAxis />
            <PolarRadiusAxis />
            <PolarGrid />
            <Legend  align="left" verticalAlign="middle" layout="vertical"/>
            <Pie data={data01} dataKey="value" nameKey="name" cx="70%" cy="35%" innerRadius={80} outerRadius={110} fill="#8884d8" label/>
            {
              data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))
            }
          </PieChart>
        </ResponsiveContainer>
      </>
    )
  }
  
  export default myPieChart
  