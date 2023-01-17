import React, { useState } from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import "./Expenses.css";
import Chart from "../Chart/Chart";

export const Expenses = ({ expenses}) => {
  const [selectedYear, setSelectedYear] = useState("2023");


  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItems = expenses.filter((element) => {
    console.log('hh',expenses);
    const stringifiedYear = new Date(element.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });


  return (
    <ul className="ul">
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler}/>
      <Chart items={filteredItems}/>
      {filteredItems.map((elem)=>{
        return (
          <ExpenseItem
              title={elem.title}
              date={elem.date}
              price={elem.price}
              key={elem.id + new Date().getTime()}
            />
        )
      })}
    </ul>
  );
};
