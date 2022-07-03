import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem'; 
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  //array of items
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    
  }

  //actual thing
  return (
    <div className="App">
      <h2>New React Application</h2>
      <p> This is also visible </p>
      <NewExpense/>
      <ExpenseItem title = {expenses[0].title} date = {expenses[0].date}></ExpenseItem>
      <ExpenseItem title = {expenses[1].title} date = {expenses[1].date}></ExpenseItem>
      <ExpenseItem title = {expenses[2].title} date = {expenses[2].date}></ExpenseItem>
      <ExpenseItem title = {expenses[3].title} date = {expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
