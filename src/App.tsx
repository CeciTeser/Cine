
import { Provider } from 'react-redux';
import { store } from './redux/store';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import CardDetailPage from './pages/CardDetailPage';
import Movies from './pages/MoviesPage';





function App() {

  return (
   
    <Provider store = {store}>

    <Router>

      <Routes>

        <Route path="/" element={<Dashboard />}/>
        <Route path="/detail/:idItem" element={<CardDetailPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/movies" element={<Movies/>}/>
        
      </Routes>

    </Router>

  </Provider>
  ); 
}

export default App;

