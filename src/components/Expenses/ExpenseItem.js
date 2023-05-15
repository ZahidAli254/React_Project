import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
//  const [title,setTitle]= useState(props.title);
//  const [amount,setAmount] =useState(props.amount);
  
//  const clickAddamount=()=>{
//   setAmount(amount+100);
//  }
//   const clickHandler=()=>{

//     setTitle("updated");
//     console.log(title)
//   }
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        {/* <h2>{props.location}</h2> */}
        <div className='expense-item__price'>Rs{props.amount}</div>
        {/* <button onClick={clickHandler}>Delete Item</button>
        <button onClick={clickAddamount}>Add Expense</button> */}
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;