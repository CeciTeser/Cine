
import { Provider } from 'react-redux';
import { store } from './redux/store';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard';





function App() {

  return (
   
    <Provider store = {store}>

    <Router>

      <Switch>

        <Route path="/" component={Dashboard}/>
        
      </Switch>

    </Router>

  </Provider>
  ); 
}

export default App;

