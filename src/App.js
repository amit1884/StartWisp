import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Blog from './Screens/Blog';
import Dashboard from './Screens/Dashboard';
import Editor from './components/Editor'
import './assets/style.css'
function App() {
    return (
        <Router>
        {/* <Sidebar/> */}
        <Route exact path="/" component={Dashboard}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/editor" component={Editor}/>
        </Router>
    )
}

export default App
