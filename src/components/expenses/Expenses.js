import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilteredList from "./ExpensesFilteredList";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [chosenYear, setChosenYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js"); //check that this file is the one logging
    console.log(selectedYear);
    setChosenYear(selectedYear);
  };

  const conditional_list = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === chosenYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={chosenYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart filteredExpenses={conditional_list} />

        {/* {conditional_list.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          conditional_list.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        <ExpensesFilteredList yearFilteredList={conditional_list} />
      </Card>
    </div>
  );
};

export default Expenses;

// <ExpenseItem
//   title={props.expenses[0].title}
//   amount={props.expenses[0].amount}
//   date={props.expenses[0].date}
// />
// <ExpenseItem
//   title={props.expenses[1].title}
//   amount={props.expenses[1].amount}
//   date={props.expenses[1].date}
// />
// <ExpenseItem
//   title={props.expenses[2].title}
//   amount={props.expenses[2].amount}
//   date={props.expenses[2].date}
// />
// <ExpenseItem
//   title={props.expenses[3].title}
//   amount={props.expenses[3].amount}
//   date={props.expenses[3].date}
// />
