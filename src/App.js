import React, { useState } from "react";

import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // to make this list dynamic instead of static we need to make it a stateful array

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //pass a new array to setExpenseList to set our expenses array to a new array that includes the new expense
  // we'll add the new expense as the first item in the array
  // add the new expense that we get from addExpenseHandler and use the spread operator on the old array to pull out all the existing array elements
  // we then populate the new array with the new expense and all the previous expenses from the old list
  // setExpenseList([expense, ...expenseList]);

  // because we are depending on the previous state to update to a new state we need to special function form of the state updating funtion
  // reason being that the special function form recieves a function as an argument that function automatically recieves the latest state snapshot
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
