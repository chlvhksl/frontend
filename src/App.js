import logo from './logo.svg';
import './App.css'; // 공통 CSS
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container"> 
          <Switch>
            <Route path='/' exact component={ListEmployeeComponent}></Route>
            <Route path='/employees' exact component={ListEmployeeComponent}></Route>
            <Route path='/add-employees' exact component={CreateEmployeeComponent}></Route>
            <Route path='/update-employees/:id' exact component={UpdateEmployeeComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
