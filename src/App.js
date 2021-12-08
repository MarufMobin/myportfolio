import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Works from './Pages/Works/Works';
import Resume from './Pages/Resume/Resume';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Router>
     
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route exact path="/home">
             <Home></Home>
          </Route>
          <Route exact path="/about">
             <About></About>
          </Route>
          <Route exact path="/contact">
             <Contact></Contact>
          </Route>
          <Route exact path="/works">
             <Works></Works>
          </Route>
          <Route exact path="/resume">
             <Resume></Resume>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
