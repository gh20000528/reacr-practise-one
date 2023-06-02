import React from 'react'

const ExpenseDate = (props) => {
  const dateObject = new Date(props.date); // 假設 props.date 是一個有效的日期字串或數字
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const day = dateObject.getDate();

  return (
    <div className="flex px-4 py-2 mx-3 text-xl font-bold text-white border-2 rounded-lg shadow-xl bg-slate-800">
        <p>{year}/{month}/{day}</p>
    </div>
  )
}

export default ExpenseDate
