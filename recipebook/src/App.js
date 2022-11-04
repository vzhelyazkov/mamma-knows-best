import React from 'react';
import '../src/index.css';
import Home from './pages/Home';
import Recipe from './components/Recipe';
import {Route,Routes} from 'react-router-dom';
import About from './pages/About';
import Signup from './pages/SignUp';
import SignIn from './pages/SignIn';
import UserDashboard from './pages/User/UserDashboard';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <>
    <ToastContainer/>

   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:recipeId" element={<Recipe/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/user/dashboard" element={<UserDashboard/>}/>

      </Routes>
</>
  )
}

export default App;