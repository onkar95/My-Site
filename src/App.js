import React, { useEffect, useState } from 'react';
import Home from './component/home/Home';
import Contact from './component/contact-footer/Contact';
import Blog from './component/blog/Blogs'
import './component/blog/blog.css'
import './component/contact-footer/contactAndFooter.css'
import './component/navbar/navbar.css'
import './component/blog/blog-menu.css'
import './index.css'
import './component/navbar/navbarbuttons.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Demom from './component/auth/Demom';
import Extrabox from './component/blog/Extrabox';
import ScrollToTop from './component/ScrollToTop';
import './App.css'
import Account from './component/Account/Account';
import About from './component/about/About';
import Newsidebar from './component/navbar/Newsidebar';
import { UserContext } from './UserContext';

function App() {

  const [user, setUser] = useState(null)
  const [view, setView] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // const res = await fetch('https://new-chat-app-udmy.herokuapp.com/verifyuser', {
        const res = await fetch('http://localhost:5000/verifyuser', {
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error)
      }
    }
    verifyUser()
  }, [])

  return (
    <div>
      <Router>
        <ScrollToTop />
        <UserContext.Provider value={{ user, setUser }}>
            <Route path='/' component={Newsidebar}></Route>
          <Switch>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/account' component={Account}></Route>
            <Route exact path='/blog' component={Blog}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact} ></Route>
            <Route exact path='/blog-boxes' component={Extrabox}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/demo' component={Demom}></Route>
          </Switch>
          <hr />
        </UserContext.Provider>

      </Router>
    </div>
  )
}

export default App

