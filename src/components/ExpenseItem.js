import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from 'react';

function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title);

  function clickHandler(){
    setTitle("Clicked");
  }

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$100</div>
        <button onClick={clickHandler}>Click me!</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
