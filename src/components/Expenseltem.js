import React from 'react'

const Expenseltem = () => {
  const date = new Date(2021, 2, 28);
  const title = 'Car Insurance'
  const amout = 296.67

  return (
    <div className='flex w-1/2 mx-auto'>
      <div className="flex-1 text-xl font-bold text-left">{date.toISOString()}</div>
      <div className='flex-1 flex justify-between'>
        <h2>{title}</h2>
        <span className='px-3 py-2 bg-slate-400 rounded-lg'>{amout}</span>
      </div>
    </div>
  )
}

export default Expenseltem
