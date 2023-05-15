import React , {useState}from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear]= useState('2020');
  const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
       <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        // locationof={props.itmms[0].location}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        // locationof={props.itmms[1].location}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        // locationof={props.itmms[2].location}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        // locationof={props.itmms[3].location}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;