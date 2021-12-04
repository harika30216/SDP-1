import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import logo from './pages/logo';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/logo' exact component={logo} />
        <Route path='/home'  component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
