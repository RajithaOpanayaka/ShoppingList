import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Component} from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
class App extends Component {
  render(){
  return (
    <div className="App">
      <AppNavbar/>
      <ShoppingList/>
      
    </div>
  );
  }
}

export default App;
