import React, { Component } from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
// import { connect } from "react-redux";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';
import HomePage2 from './pages/HomePage2';
import PaymentPage from './pages/PaymentPage';
import ContactMe from './pages/ContactMe';
import tandc from './pages/tandc';
import NaviBar from './NaviBar';
// import ProtectedRoute from "./Components/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NaviBar />
                    <div id="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact  />
                            <Route path="/AboutPage" component={AboutPage} exact />    
                            <Route path="/Login" component={Login} exact />
                            <Route path="/DonatePage" component={DonatePage} exact />
                            <Route path="/PaymentPage" component={PaymentPage} exact />
                            <Route Path="/tandc" component={tandc} exact />
                            <Route path="/ContactMe" component={ContactMe} exact />
                            <Route component={HomePage2} exact />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;

// function App(props) {
//     const { isAuthenticated, isVerifying } = props;
//     return (
//         <div className="App">
//             <NaviBar />
//             <div id="page-body">
//       <Switch>
//         <ProtectedRoute
//           exact
//           path="/"
//           component={HomePage}
//           isAuthenticated={isAuthenticated}
//           isVerifying={isVerifying}
//         />
//        <Route path="/" component={HomePage} exact  />          
//        <Route path="/ContactMe" component={ContactMe} exact />
//        <Route component={HomePage2} exact />
//        <Route path="/Login" component={Login} exact />
//        <Route path="/AboutPage" component={AboutPage} exact />              
//        <Route path="/DonatePage" component={DonatePage} exact />          
//        <Route path="/PaymentPage" component={PaymentPage} exact />          
//        <Route Path="/tandc" component={tandc} exact />
//       </Switch>
//       </div>
//       </div>
//     );
//   }
  
//   function mapStateToProps(state) {
//     return {
//       isAuthenticated: state.auth.isAuthenticated,
//       isVerifying: state.auth.isVerifying
//     };
//   }
  
//   export default connect(mapStateToProps)(App);