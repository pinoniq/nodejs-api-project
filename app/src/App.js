import './App.css';
import Voter from './Voter';

const App = () => (
  <div className="App">
    <h1>Jeroen's magical voter</h1>
    <hr />
    <Voter id={1} />
    <hr />
    <Voter id={2} />
    <hr />
    <Voter id={3} />
    <hr />
  </div>
);

export default App;
