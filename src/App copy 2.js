
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
