import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  //parameter expects the entered expense data from the expense form
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // here we copy in the passed expense data from form and pull out all the key value pairs
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
    setShowForm(false);
  };

  const showNewExpenseForm = () => {
    console.log("clicked!");
    setShowForm(true);
  };

  const hideNewExpenseForm = () => {
    setShowForm(false);
  };

  return (
    <Card className="new-expense">
      {!showForm ? (
        <button onClick={showNewExpenseForm}>Add a New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onHideForm={hideNewExpenseForm}
        />
      )}
    </Card>
  );
};

export default NewExpense;
