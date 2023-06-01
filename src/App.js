import './App.css';
import Expemseltem from './components/Expenseltem'

function App() {

  const exenses = [
    {
      id:'e1',
      title:'Toilet Paper',
      amount: 94.67,
      date: Date(2021, 2, 28)
    },
    {
      id:'e2',
      title:'Car Insurance',
      amount: 296.67,
      date: Date(2021, 2, 28)
    },
    {
      id:'e3',
      title:'New Tv',
      amount: 799.67,
      date: Date(2021, 2, 28)
    },
  ]
  return (
    <div className="App">
      <div>
        <h2>Let get started!</h2>
      </div>
      <div className='bg-gray-300 w-1/2 mx-auto py-5 rounded-lg shadow-2xl px-5'>
        <Expemseltem 
          title = {exenses[0].title}
          amount = {exenses[0].amount}
          date = {exenses[0].date}
        ></Expemseltem>
          <Expemseltem 
          title = {exenses[1].title}
          amount = {exenses[1].amount}
          date = {exenses[1].date}
        ></Expemseltem>
          <Expemseltem 
          title = {exenses[2].title}
          amount = {exenses[2].amount}
          date = {exenses[2].date}
        ></Expemseltem>
      </div>
    </div>
  );
}

export default App;
