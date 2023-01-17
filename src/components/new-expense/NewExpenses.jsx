import { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/Button/Button";
import './NewExpenses.css'

export const NewExpenses = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);
  const showExpenseForm = () => {
    setShowForm((prevState)=> {
       return !prevState
    });
  };

  return (
    <div className="div1">
      {showForm ? (
        <ExpenseForm onShowForm={showExpenseForm}  onNewExpenseAdd={onNewExpenseAdd} />
      ) : (
        <Button title="add new expense" onClick={showExpenseForm} />
      )}
    </div>
  );
};
