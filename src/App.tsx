
import { Provider } from 'react-redux';
import { store } from './redux/store';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import CardDetailPage from './pages/CardDetailPage';





function App() {

  return (
   
    <Provider store = {store}>

    <Router>

      <Routes>

        <Route path="/" element={<Dashboard />}/>
        <Route path="/detail/:idItem" element={<CardDetailPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        
      </Routes>

    </Router>

  </Provider>
  ); 
}

export default App;

