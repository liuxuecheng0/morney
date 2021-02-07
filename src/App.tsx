import React from 'react';

import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
`
const Main = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
`
const Nav =styled.nav`
    border: 1px solid pink;
  >ul{
    display: flex;
    >li{
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`
function App() {
  return (
    <Router>
        <Wrapper>
            <Main>
                <Switch>

                    <Route path="/statistics">
                        <Statistics />
                    </Route>
                    <Route path="/label">
                        <Label />
                    </Route>
                    <Route path="/notes">
                        <Notes />
                    </Route>
                    <Route path="*">
                        <Page404 />
                    </Route>
                    <Redirect exact from="/" to="/notes"></Redirect>
                </Switch>
            </Main>
            <Nav>
                <ul>
                    <li><Link to="/notes">Notes</Link></li>
                    <li><Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/label">Label</Link></li>
                </ul>
            </Nav>
        </Wrapper>
    </Router>

  );
}
function Notes(){
    return <h2>Notes</h2>
}
function Label(){
    return <h2>Label</h2>
}
function Statistics(){
    return <h2>Statistics</h2>
}
function Page404(){
    return <h2>页面炸了</h2>
}
export default App;
