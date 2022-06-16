import "./ExpensesFilteredList.css";
import ExpenseItem from "./ExpenseItem";

import React from "react";

const ExpensesFilteredList = (props) => {
  // we want to render one ExpenseItem per element in the expenses array
  // by adding a key we help react to identify the individual expense items
  // for this you need a unique value per list item
  // always add a key with unique values when mapping out lists of items
  if (props.yearFilteredList.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.yearFilteredList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesFilteredList;
