import React, { useState } from "react";

import "./ExpenseForm.css";

//props is passing in the saveExpenseDataHandler function
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  /*  const [userInput, setUserInput] = useState({
    date: "",
    title: "",
    amount: "",
  }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //Not the best way
    /* setUserInput({
      ...userInput,
      title: event.target.value,
    }); */

    //Better way
    //React schedules updates
    //This approach guarantees that you opperate on the latest state snapshot
    /*  setUserInput((prevState) => {
        return {...prevState, title: event.target.value}
    }) */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    /* setUserInput({
      ...userInput,
      date: event.target.value,
    }); */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    /* setUserInput({
      ...userInput,
      amount: event.target.value,
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //sending expensedata object to function in NewExpense component
    setEnteredTitle(""); //reseting input field to empty
    setEnteredAmount(""); //reseting input field to empty
    setEnteredDate(""); //reseting input field to empty
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2020"
            max="31-12-2023"
            value={enteredDate} //two-way binding
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button value="cancel" type="button" onClick={props.onHideForm}>
          Cancel
        </button>
        <button value="addExpense" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
