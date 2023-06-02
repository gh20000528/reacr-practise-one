import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enterExpenseData) =>{
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
  return (
    <div className='w-1/2 px-5 py-5 mx-auto my-10 bg-gray-300 rounded-lg shadow-2xl'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense
