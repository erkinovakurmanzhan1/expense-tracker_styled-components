import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({items}) => {
  const maximumPrice = 2000;
  const months = [
    {
      label: "January",
      currentPrice: 0,
    },
    {
      label: "Fabrary",
      currentPrice: 0,
    },
    {
      label: "March",
      currentPrice: 0,
    },
    {
      label: "April",
      currentPrice: 0,
    },
    {
      label: "June",
      currentPrice: 0,
    },
    {
      label: "July",
      currentPrice: 0,
    },
    {
      label: "Aughust",
      currentPrice: 0,
    },
    {
      label: "September",
      currentPrice: 0,
    },
    {
      label: "October",
      currentPrice: 0,
    },
    {
      label: "November",
      currentPrice:0,
    },
    {
      label: "December",
      currentPrice: 0,
    },
  ];

  items.forEach(item => {
    const monthNumber = new Date(item.date).getMonth()
    months[monthNumber].currentPrice += item.price
  });
  console.log(months);

  return (
    <div className="chart">
      {months.map((item) => {
        return (
          <ChartBar
            key={item.label}
            label={item.label}
            currentPrice={item.currentPrice}
            maximumPrice={maximumPrice}
          />
        );
      })}
    </div>
  );
};

export default Chart;
