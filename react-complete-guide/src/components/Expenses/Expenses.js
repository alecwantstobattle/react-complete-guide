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

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense, index) => (
      <ExpenseItem
        key={expense.id} // can use index if no id, but not recommended
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilter={expenseFilterHandler}
        />
        {
          /* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          // filteredExpenses.length === 0 ? <p>No expenses found</p> :
          filteredExpenses.map((expense, index) => (
            <ExpenseItem
              key={expense.id} // can use index if no id, but not recommended
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */
          expensesContent
        }
      </Card>
    </div>
  );
};

export default Expenses;
