import { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/Button/Button";
import styled from "styled-components";

export const NewExpenses = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);
  const showExpenseForm = () => {
    setShowForm((prevState)=> {
       return !prevState
    });
  };

  return (
    <NewexpenseDivS>
      {showForm ? (
        <ExpenseForm onShowForm={showExpenseForm}  onNewExpenseAdd={onNewExpenseAdd} />
      ) : (
        <Button title="add new expense" onClick={showExpenseForm} />
      )}
    </NewexpenseDivS>
  );
};
const NewexpenseDivS=styled.div`
    border-radius: 10px;
    padding: 30px;
    width: 48.75rem;
    background-color: #AD9BE9;
`