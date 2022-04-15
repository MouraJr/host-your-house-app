import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './shared/components/LandingPage/Landing';
import { Register } from './shared/components/RegisterPage/Register';
import { Login } from './shared/components/LoginPage/Login';
import { MainPage } from './shared/components/main-page/main-page';
import { AccountPage } from './shared/components/AccountPage/accountPage';
import { ReservedPage } from './shared/components/ReservedPage/ReservedPage';
import { SavedPage } from './shared/components/SavedPage/SavedPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={ <MainPage/> }/>
              <Route path="/main" element={ <MainPage/> }/>
              <Route path="/register" element={ <Register/> }/>
              <Route path="/login" element={ <Login/> }/>
              <Route path="/myaccount" element={ <AccountPage/> }/>
              <Route path="/myreserved" element={ <ReservedPage/> }/>
              <Route path="/mySaved" element={ <SavedPage/> }/>
          </Routes>
      </Router>
  );
}

export default App;
