import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Blog from './Screens/Blog';
import Dashboard from './Screens/Dashboard';
import './assets/style.css'
function App() {
    return (
        <Router>
        {/* <Sidebar/> */}
        <Route exact path="/" component={Dashboard}/>
        <Route path="/blog" component={Blog}/>
        </Router>
    )
}

export default App
