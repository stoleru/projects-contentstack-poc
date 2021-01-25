import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Project from './pages/Project';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContentStack from './services/contentstack';

function App() {

  const [ logo, setLogo ] = useState({});
  const [ title, setTitle ] = useState('');
  const [ header, setHeader ] = useState({});

  useEffect(() => {
    ContentStack.getEntry('header').then(response => {
      let data = response.data?.entries[0];
      
      setHeader(data);
      setLogo(data.logo);
      setTitle(data.title);
    });
  }, []);

  const headerColor = header.color || '#f8f9fa';
  
  return (
    <Router>
      <div className="App">
        <Navbar light expand="md" style={{
          backgroundColor: headerColor
        }}>
          <NavbarBrand href="/">
            <img src={logo.url}  height={50} alt={title} />
          </NavbarBrand>
          <Nav className="ml-auto main-nav" navbar>
              <NavItem>
                <Link to="/" className="nav-link" style={{color: header.text_color}}>Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/projects" className="nav-link" style={{color: header.text_color}}>Projects</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link" style={{color: header.text_color}}>Contact</Link>
              </NavItem>
            </Nav>
        </Navbar>
        <section>
          <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/projects" exact>
                <Projects />
              </Route>
              <Route path="/projects/:projectId" component={Project} />
              <Route path="/">
                Home
              </Route>
            </Switch>
          </section>
      </div>
    </Router>
  );
}

export default App;
