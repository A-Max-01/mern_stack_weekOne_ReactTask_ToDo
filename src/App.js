import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ToDo from './ToDo/content/ToDoList';
import SingUp from './User/components/SingUp';
import Login from './User/components/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/login'}  exact><Login/></Route>
        <Route path={'/signup'} exact><SingUp/></Route>
        <Route path={'/'} exact><ToDo/></Route>
      </Switch>
    </Router>
  );
}

export default App;
