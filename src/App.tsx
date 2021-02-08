import React from 'react';
import './App.css';
import styled from 'styled-components';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Nav from "./components/Nav";
const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
`;

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
            <Nav/>
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
