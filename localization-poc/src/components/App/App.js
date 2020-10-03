import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Main from '../Main/main'
import Home from '../Home/home'
import LanguageSettings from '../Settings/settings'
import { BrowserRouter as Router , Route, Link} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import getUser from '../../modules/user'


class App extends React.Component {
  state = {
    userId : getUser()
  }

  render() {
    return (
      <Router>
      <div className="App">
      <div>{this.state.userId}</div>
      <Container fluid>
        <Route path="/" exact component={Home} />
        <Route path="/settings" component={LanguageSettings} />
        <Route path="/main" component={Main} />
        </Container>
      </div>
  
      
      </Router>
    )
  }
}


export default App;
