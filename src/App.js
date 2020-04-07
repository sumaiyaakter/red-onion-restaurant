import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Menu from './components/Menus/Menu';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetails from './components/ItemDetails/ItemDetails';
import Error from './components/Error/Error';
import Features from './components/Features/Features';
import Login from './components/Login/Login';
import {AuthProvider, PrivateRoute} from './components/Login/useAuth';
import Shipment from './components/Login/Shipment';
import { createContext } from 'react';


export const UserContext = createContext();

function App() {
  return (
    <div className="App">


     <AuthProvider>

        <Header></Header>
        <Router>
          <Switch>
            <Route path="/item/:itemkey">
              <ItemDetails></ItemDetails>
            </Route>

            <Route exact path="/">
              <Hero></Hero>
              <Menu></Menu>
              <Features></Features>
              <Footer></Footer>
            </Route>

            <Route path="/signup"> 
                <Login></Login>
            </Route>
         
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>

            <Route  path="*">
             <Error></Error>
            </Route>

        </Switch>
      </Router>

      </AuthProvider>


    </div>
  );
}

export default App;

