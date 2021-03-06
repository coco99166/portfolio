import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Garrett Love',
      headerLinks: [
        //{ title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk',
        subTitle: 'Interested in more information? Shoot me an email blow or to coco99166@outlook.com directly!'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <div className="bg">

            <Navbar className="border-bottom" variant="dark" expand="lg">
              <Navbar.Brand>Charlotte Zhu</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse>
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/portfolio">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/portfolio" render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle}/>} />
            
            <div className="fixed-bottom">  
              <Navbar variant="dark">
                <Container>
                    <NavbarBrand>Made by Charlotte Zhu</NavbarBrand>
                </Container>
              </Navbar>
            </div>
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;