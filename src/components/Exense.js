import React from 'react'
import Expemseltem from './Expenseltem'

const Exense = (props) => {
  return (
    <div className='bg-gray-300 w-1/2 mx-auto py-5 rounded-lg shadow-2xl px-5'>
        <Expemseltem 
        title = {props.items[0].title}
        amount = {props.items[0].amount}
        date = {props.items[0].date}
        ></Expemseltem>
        <Expemseltem 
        title = {props.items[1].title}
        amount = {props.items[1].amount}
        date = {props.items[1].date}
        ></Expemseltem>
        <Expemseltem 
        title = {props.items[2].title}
        amount = {props.items[2].amount}
        date = {props.items[2].date}
        ></Expemseltem>
    </div>
  )
}

export default Exense
