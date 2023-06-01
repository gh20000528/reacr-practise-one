import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

const Expenseltem = (props) => {
    
  return (
    <Card>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='flex-1 flex justify-between items-center'>
        <h2>{props.title}</h2>
        <p className='px-3 py-2 bg-slate-400 rounded-lg '>{props.amount}</p>
      </div>
    </Card>
  )
}

export default Expenseltem
