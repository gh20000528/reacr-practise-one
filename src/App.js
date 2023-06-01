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
      <Expemseltem></Expemseltem>
    </div>
  );
}

export default App;
