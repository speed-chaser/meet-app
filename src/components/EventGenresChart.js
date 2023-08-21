import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const EventGenresChart = ({ events }) => {
  let [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
  const colors = ["#FFC3A0", "#FF677D", "#D4A5A5", "#392F5A", "#17BEBB"];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    return data;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    if (percent > 0) {
      const radius = outerRadius + 10; // Place label outside the pie chart
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="black" // Change the color of the label text
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
        </text>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          activeShape={null}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`Number of Events: ${value}`]} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
