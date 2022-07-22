import logo from './logo.svg';
import './App.css';
import DateTime from './component/DateTime';
import Click from './component/Click';
import LastUpdate from './component/LastUpdate';

function App() {
  return (
    <div className="App">
     {/* <DateTime/> */}
     <Click/>
     <LastUpdate/>
    </div>
  );
}

export default App;
