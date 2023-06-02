import React , {useState} from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [NewExpense , setNewExpense] = useState(false)
  const onSaveExpenseDataHandler = (enterExpenseData) =>{
      const expenseData = {
          ...enterExpenseData,
          id: Math.random().toString()
      }
      props.onAddExpense(expenseData)
      setNewExpense(false)
  }
  const startNewExpense = () => {
    setNewExpense(true)
  }
  const stopNewExpense = () => {
    setNewExpense(false)
  }
  return (
    <div className='w-1/2 px-5 py-5 mx-auto my-10 bg-gray-300 rounded-lg shadow-2xl'>
        { !NewExpense && <button className='px-4 py-3 bg-slate-500 rounded-xl' onClick={startNewExpense}>New Expense</button> }
        { NewExpense && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopNewExpense}></ExpenseForm> } 
    </div>
  )
}

export default NewExpense
