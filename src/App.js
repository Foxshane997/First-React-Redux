import Todo from './components/Todo';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter className="Counter"/>
      <Todo className="Todo"/>
    </div>
  );
}

export default App;
