import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar"
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import styled from "styled-components";
// import { useAuthState } from "react-firebase-hooks/auth";
// import {auth} from "./firebase"
// import userEvent from '@testing-library/user-event';
import Login from './Login';
// import Spinner from  "react-spinkit"
import {useStateValue} from './StateProvider';

function App() {
  // const [user, setUser] = useStat(null);
  const [{user}, dispatch] = useStateValue()
  return (
    //BEM naming convention
    <div className="App">
      <Router>
      {!user ? ( 
        <Login />
      ) : ( 
              <>
                <Header />
                  <div className="app__body">
                    <Sidebar />
                    <Switch>
                        <Route path="/room/:roomId">
                            <Chat />
                        </Route>
                        <Route path="/">
                            <h1>Welcome</h1>
                        </Route>
                    </Switch>
                    </div>
              </>
            )}
        </Router>
    </div>
  );
}

export default App;
