import React from 'react'
import Expemseltem from './Expenseltem'

const ExpenseList = (props) => {
  if(props.items.length === 0){
      return <h2 className='text-2xl font-bold'>Expense no found</h2>
  }
  return (
    <ul>
        {props.items.map((expense) => (
          <Expemseltem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
          ></Expemseltem>
        ))}
    </ul>
  )
}

export default ExpenseList
