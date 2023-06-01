import React , {useState}  from 'react'

import ExpenseDate from './ExpenseDate'
import Card from './Card'

const Expenseltem = (props) => {

  const [title , setTitle] = useState(props.title)

  const clickHandler = ()=>{
    setTitle('uppdate!!')
  }
  return (
    <Card>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='flex-1 flex justify-between items-center'>
        <h2>{title}</h2>
        <p className='px-3 py-2 bg-slate-400 rounded-lg '>{props.amount}</p>
        <button className='px-3 py-2 bg-slate-400 rounded-lg ' onClick={clickHandler}>click</button>
      </div>
    </Card>
  )
}

export default Expenseltem
