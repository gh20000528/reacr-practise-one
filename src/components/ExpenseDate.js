import React from 'react'

const ExpenseDate = (props) => {
  const dateObject = new Date(props.date); // 假設 props.date 是一個有效的日期字串或數字
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  return (
    <div className="text-xl font-bold px-4 py-2 flex bg-slate-800 rounded-lg shadow-xl text-white mx-3 border-2">
        <p>{year}/{month}/{day}</p>
    </div>
  )
}

export default ExpenseDate
