import React, {Fragment, useState, useEffect} from 'react'
import {
  BrowserRouter as Router, 
  Routes, // Switch in tutorial
  Route, 
  Navigate, // Redirect in tutorial
} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

// Import components
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';

// toast.configure()

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  async function isAuth() {
    try {
      
      const response = await fetch(
        'http://localhost:8800/auth/verify', {
          method: 'GET',
          headers: {token: localStorage.token}
        }
      )

      const parseRes = await response.json()

      // console.log(parseRes)
      
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    isAuth()
  })

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
                  <Login setAuth = {setAuth} />
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
                  <Register setAuth = {setAuth} />
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
                  <Dashboard setAuth = {setAuth} />
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
