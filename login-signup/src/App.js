import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
      <Route path='/' element={<h1>Home</h1>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
