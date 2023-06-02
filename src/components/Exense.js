import React , {useState} from 'react'
import ExpemseChart from './ExpentChart'
import ExpenseFiler from './ExpenseFiler'
import ExpenseList from './ExpenseList'

const Exense = (props) => {
  const [filerYear , setFilerYear] = useState('2022')

  const yearChangeHandler = (e) =>{
    setFilerYear(e);
  }

 


  const filteredExpenses = props.items.filter(expense => {
    return (expense.date.getFullYear().toString()) === filerYear;
  })


  return (
    <div className='w-1/2 px-5 py-5 mx-auto bg-gray-300 rounded-lg shadow-2xl'>
      <ExpenseFiler selected={filerYear} onYearChange={yearChangeHandler}></ExpenseFiler>
      <ExpemseChart expense={filteredExpenses}></ExpemseChart>
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </div>
  )
}

export default Exense
