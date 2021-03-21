import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import RiderDetail from "./component/RiderDetail/RiderDetail";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState('');
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/book/:vehicle">
              <RiderDetail></RiderDetail>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
