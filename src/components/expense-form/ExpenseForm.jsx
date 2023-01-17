import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import FormInput from "../UI/form-input/FormInput";
import "./ExpensesForm.css";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const cancelHenler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expensData = {
      title,
      price,
      date,
    };

    props.onNewExpenseAdd(expensData);
    console.log(expensData);

    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form className="form">
        <FormInput
          id="text"
          labelName="Название"
          inputType="text"
          placeholder="Введите ..."
          value={title}
          onChange={titleInputChangeHandler}
        />

        <FormInput
          id="price"
          labelName="Количество"
          inputType="number"
          value={price}
          onChange={priceInputChangeHandler}
        />
        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          min="2019-01-01"
          max="2023-12-31"
          placeholder="дд.мм.гггг"
          value={date}
          onChange={dateInputChangeHandler}
        />
    

      <div className="buttonStyle">
        <Button title="Отмена" onClick={cancelHenler} />
        <Button
          title="Сохранить"
          onClick={saveHandler}
          disabled={!date || !title || !price}
        />
      </div>
    </form>
  );
};
