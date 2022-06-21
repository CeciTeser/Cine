
import { Provider } from 'react-redux';
import { store } from './redux/store';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard';





function App() {

  return (
   
    <Provider store = {store}>

    <Router>

      <Routes>

        <Route path="/" element={<Dashboard />}/>
        
      </Routes>

    </Router>

  </Provider>
  ); 
}

export default App;

