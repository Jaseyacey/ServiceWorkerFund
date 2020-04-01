import React, { Component } from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';
import HomePage2 from './pages/HomePage2';
import PaymentPage from './pages/PaymentPage';
import ContactMe from './pages/ContactMe';
import tandc from './pages/tandc';
import NaviBar from './NaviBar';
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
                            <Route path="/DonatePage" component={DonatePage} exact />
                            <Route path="/ContactMe" component={ContactMe} exact />
                            <Route path="/PaymentPage" component={PaymentPage} exact />
                            <Route Path="/tandc" component={tandc} exact />
                            <Route component={HomePage2} exact />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;