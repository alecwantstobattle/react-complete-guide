import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterHandler = (selectedExpenseFilter) => {
    setFilteredYear(selectedExpenseFilter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilter={expenseFilterHandler}
        />
        {
          //props.expenses
          // .filter(
          //   (expense) => expense.date.getFullYear() === parseInt(filteredYear)
          // )
          filteredExpenses.map((expense, index) => (
            <ExpenseItem
              key={expense.id} // can use index if no id, but not recommended
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </Card>
    </div>
  );
};

export default Expenses;
