import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./Components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';
import HomePage2 from './pages/HomePage2';
import PaymentPage from './pages/PaymentPage';
import ContactMe from './pages/ContactMe';
import tandc from './pages/tandc';
import Navibar from './NaviBar';
import './App.css'

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <>
    <Navibar />
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={HomePage}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      
      <Route path="/login" component={Login} /> 
      <Route path="/" component={HomePage} exact  />
      <Route path="/AboutPage" component={AboutPage} exact />    
      <Route path="/DonatePage" component={DonatePage} exact />
      <Route path="/PaymentPage" component={PaymentPage} exact />
      <Route Path="/tandc" component={tandc} exact />
      <Route path="/ContactMe" component={ContactMe} exact />
      <Route component={HomePage2} exact />
    </Switch>
</>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);