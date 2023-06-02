import './App.css';
import { useState } from 'react'
import Exense from './components/Exense'
import NewExpense from './components/NewExpense/NewExpense'


const DUMMY_EXPENSES = [
  {
    id:'e1',
    title:'Toilet Paper',
    amount: 94.67,
    date: new Date(2022, 4, 28)
  },
  {
    id:'e2',
    title:'Car Insurance',
    amount: 296.67,
    date: new Date(2022, 2, 28)
  },
  {
    id:'e3',
    title:'New Tv',
    amount: 799.67,
    date: new Date(2022, 1, 28)
  },
]

function App() {
  const [expense, setExpense] = useState(DUMMY_EXPENSES)
  
  const onAddExpenseHandler = expense =>{
    // console.log(expense);
    setExpense((prevExpense)=>{ 
      // console.log(expense);
      return [ ...prevExpense, expense] 
    })
  }

  return (
    <div className="App">
        <h2>Let get started!</h2>
        <NewExpense onAddExpense={onAddExpenseHandler}></NewExpense>
        <Exense items={expense}></Exense>
    </div>
  );
}

export default App;
