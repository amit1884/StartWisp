import React from 'react'
import GraphSection from '../components/GraphSection'
import NotepadSection from '../components/NotepadSection'
import NotificationSection from '../components/NotificationSection'
import Sidebar from '../components/Sidebar'

function Dashboard() {
    return (
        <div>
            <Sidebar id={1}/>
            <div className="dashboard_container">
                <div className="search_bar">
                    <form>
                        <input id="search_bar" type="text" placeholder="&nbsp;&#x1F50E;&nbsp;&nbsp;Search ..."/>
                    </form>
                </div>
                <div className="main_content">
                    <div className="left_section">
                        <div className="graph_section">
                            <GraphSection/>
                        </div>
                        <div className="notepad_section">
                            <NotepadSection/>
                        </div>
                    </div>
                    <div className="right_section">
                       <NotificationSection/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
