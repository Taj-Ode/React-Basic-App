// import { FiEdit3 } from "react-icons/fi";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// A component in react is just a javascript function

// props will give us key value pairs
const ExpenseItem = (props) => {
  //React hooks must only be called inside of React component functions. Not outside or inside nested functions
  //useState is like a special variable where changes trigger the component function to be called again.
  //useState returns an array, the first element is the current state value
  // and the second element is the updating function
  // we use array destructuring to store both elements in separate constants
  // we use constants because
  // when we call the update function two things happen:
  // 1. the state value is update and the component function is executed again

  return (
    <li>
      {/* Make sure that a class name can be set on the card component and have an
      effect */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount} SEK</div>
        </div>
        {/* <FiEdit3 onClick={clickHandler}></FiEdit3> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
