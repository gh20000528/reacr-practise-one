import React , {useState} from 'react'
import Expemseltem from './Expenseltem'
import ExpenseFiler from './ExpenseFiler'

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
      {filteredExpenses.map((expense) => (
        <Expemseltem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></Expemseltem>
      ))}
    </div>
  )
}

export default Exense
