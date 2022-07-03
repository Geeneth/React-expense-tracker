import './ExpenseDate.css';

function ExpenseDate(props) {
  return (
    <div className='expense-date'>
      <h2>{props.date.toLocaleString()}</h2>
    </div>
  );
}

export default ExpenseDate;
