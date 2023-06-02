import React from 'react'

const ExpenseFiler = (props) => {
  const yearHandler = (e) =>{
    props.onYearChange(e.target.value)
  }
  return (
    <div className='w-full '>
      <div className='flex justify-between'>
        <label className='text-xl font-bold'>Filter by year</label>
        <select className='px-3 py-2 rounded-lg' value={props.selected} onChange={yearHandler}>
          <option value='2022'>2023</option>
          <option value='2021'>2022</option>
          <option value='2020'>2021</option>
          <option value='2019'>2020</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFiler
