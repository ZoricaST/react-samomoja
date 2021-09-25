import ExpenseItem from './components/ExpenseItem.js';
import './App.css';

function App() {
  return (
    <div className="App">
       <ExpenseItem></ExpenseItem>
      <header className="App-header">
        <p>
          Ovo je samo moja aplikacija
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Učim React
        </a>
      </header>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
