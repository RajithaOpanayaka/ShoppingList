import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Component} from 'react';
import AppNavbar from './components/AppNavbar'
class App extends Component {
  render(){
  return (
    <div className="App">
      <AppNavbar/>
      <h1>Shopping List</h1>
    </div>
  );
  }
}

export default App;
