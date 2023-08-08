import React, {Fragment, useState} from 'react'
import {
  BrowserRouter as Router, 
  Routes, // Switch in tutorial
  Route, 
  Navigate, // Redirect in tutorial
} from 'react-router-dom'
import './App.css'

// Import components
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Fragment>
      <Router>
        <div className = 'container'>
          <Routes>
            <Route 
              exact 
              path = '/login'
              element = {
                !isAuthenticated ? (
                  <Login />
                ) : (
                  <Navigate to = {'/dashboard'} />
                )
              }
            />
            <Route 
              exact
              path = '/register'
              element = {
                !isAuthenticated ? (
                  <Register />
                ) : (
                  <Navigate to = {'/login'} />
                )
              }
            />
            <Route 
              exact
              path = '/dashboard'
              element = {
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to = '/login' />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
