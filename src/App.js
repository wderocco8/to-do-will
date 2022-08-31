import './App.css';
import Navigation from './Navigation';
import List from './List';
function App() {

  return (
    <div className="App">
      <Navigation/>
      <div className='content'>
        <List/>
      </div>
    </div>
  );
}

export default App;
