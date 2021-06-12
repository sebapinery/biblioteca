import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
