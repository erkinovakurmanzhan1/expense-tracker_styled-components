import React from "react";
import ChartBar from "./ChartBar";
import styled from "styled-components";

const Chart = ({ items }) => {
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
      currentPrice: 0,
    },
    {
      label: "December",
      currentPrice: 0,
    },
  ];

  items.forEach((item) => {
    const monthNumber = new Date(item.date).getMonth();
    months[monthNumber].currentPrice += item.price;
  });
  console.log(months);

  return (
    <ChartStyled>
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
    </ChartStyled>
  );
};

export default Chart;

const ChartStyled = styled.div`
  margin-top: 90px;
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;
