import './tailwind.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return ( 
    <>
      {/* <Navbar/> */}
      {/* <Projects/> */}
      <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={Navbar} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
