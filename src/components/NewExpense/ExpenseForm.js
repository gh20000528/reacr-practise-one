import React , {useState} from 'react'

const ExpenseForm = () => {
    // method one
    const [enterTilie , setEnterTitle] = useState('')
    const [enterAmount , setEnterAmount] = useState('')
    const [enterDate , setEnterDate] = useState('')

    // method two
    // const [userInput , setUserInput] = useState({
    //     enterTilie: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })


    const titleHandler = (e) => {
        // method one
        setEnterTitle(e.target.value)
        // method two
        // setUserInput({
        //     ...userInput,
        //     enterTilie: e.target.value
        // });
        // method three
        // setEnterTitle = (prevState) =>{ return {...prevState, enterTilie: e.terget.value}}
    }
    const amountHandler = e => {
        setEnterAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount: e.target.value
        // })
    }
    const dateHandler = e => {
        setEnterDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterDate: e.target.value
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: enterTilie,
            Amount: enterAmount,
            data: new Date(enterDate)
        }

        console.log(expenseData);
        setEnterTitle('')
        setEnterAmount('')
        setEnterDate('')
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='flex flex-wrap w-full lg:flex'>
            <div className='px-5'>
                <label className='block text-sm font-bold text-left'>Title</label>
                <input 
                type="text" 
                className='px-3 py-2 rounded-lg' 
                value={enterTilie}
                onChange={titleHandler} />
            </div>
            <div className='px-5'>
                <label className='block text-sm font-bold text-left'>Amount</label>
                <input 
                type="number" 
                min='0.01' 
                step='0.01' 
                className='px-3 py-2 rounded-lg'
                value={enterAmount} 
                onChange={amountHandler}/>
            </div>
            <div className='px-5'>
                <label className='block text-sm font-bold text-left'>Date</label>
                <input 
                type="date" 
                min='2021-01-01' 
                max='2024-12-31' 
                className='px-3 py-2 rounded-lg' 
                value={enterDate}
                onChange={dateHandler}/>
            </div>
        </div>
        <div>
            <button type='submit' className='px-3 py-2 my-5 rounded-lg bg-stone-400' >new expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
