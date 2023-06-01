import React from 'react'

const Card = (props) => {
  return (
    <div className='flex w-full mx-auto bg-gray-500 px-3 py-2 rounded-lg shadow-2xl my-5 items-center'>
      {props.children}
    </div>
  )
}

export default Card
