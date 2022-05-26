import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import DiePage from './DiePage';

function App() {

  const dice = ["d4", "d6","d8", "d10", "d10p", "d12", "d20"]

  const diePages = dice.map(die => <Route key={die} exact path={`/${die}`} render={(props) => <DiePage { ...props } key={die} die={die} />} />)
 

  return (
    <div className="App">
      <h1>Welcome to Dice Goblin</h1>
      <Router>
        <NavBar dice={dice} />
        <Switch>
          {diePages}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
