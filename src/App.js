import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Blog from './Screens/Blog';
import Dashboard from './Screens/Dashboard';

function App() {
    return (
        <Router>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Blog}/>
        </Router>
    )
}

export default App
