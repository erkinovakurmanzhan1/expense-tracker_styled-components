import React from "react";
import styled from "styled-components";

const ExpensesFilter = ({value,onChange}) => {
  return (
    <ExpenseFilterS>
      <ExpenseFilterControlS>
        <label>Filter by year</label>   
        <SelectFormFilterS value={value} onChange={onChange}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </SelectFormFilterS>
      </ExpenseFilterControlS>
    </ExpenseFilterS>
  );
};

export default ExpensesFilter;


const ExpenseFilterS = styled.div`
  color: white;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 1rem;
`

const ExpenseFilterControlS=styled.div`
  display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

`

const SelectFormFilterS=styled.select`
   width: 100px;
    height: 50px;
    border-radius: 5px;
    text-align: center;
`