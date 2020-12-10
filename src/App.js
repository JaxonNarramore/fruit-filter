import './App.css';

// Components
import FruitContainer from './components/FruitContainer';


function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'jackfruit', 'kiwi', 'grape', 'grapefruit', 'mango', 'starfruit']
  return (
    <div className="App">
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;
