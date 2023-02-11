// import logo from './logo.svg';
// import './App.css';
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/Expenses/NewExpense/NewExpense"

const App = () => {
  const expense = [
    {
      item: "food",
      amount: "Rs. 10",
      LocationOfExpenditure: "cafe",
      date: new Date(2023, 7, 2),
    },
    {
      item: "petrol",
      amount: "Rs. 100",
      LocationOfExpenditure: "bike",
      date: new Date(2023, 8, 1),
    },
    {
      item: "movie",
      amount: "Rs. 200",
      LocationOfExpenditure: "PVR",
      date: new Date(2023, 29, 5),
    },
  ];

  const addExpenseHandler = expense => {
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpense onSaveExpenseData={addExpenseHandler}/>
      <Expenses items={expense} />
    </div>
  );
};

export default App;
