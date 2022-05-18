import './App.css';
import Counter from './components/Counter';
import Genres from './components/Genres';
import Hello from './components/Hello';
import Search from './components/Search';



function App() {
  return (
    <div className="App">
      1) hello world: <Hello />
      <br />
      2) Counter : <Counter />
      <br />
      3) Search: <Search />
      <br />
      4) Genres : <Genres />
    </div >
  );
}

export default App;
