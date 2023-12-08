import logo from './logo.svg';
import './App.css';

function App() {
  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>React</h1>
      <p>Soma {sum(1, 2)}</p>
    </div>
  );
}

export default App;
