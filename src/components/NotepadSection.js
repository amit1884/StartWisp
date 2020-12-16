import React from 'react'
import Notepad from './Notepad'
import SmallGraph from './SmallGraph'
import Stat from './Stat'

function NotepadSection() {
    return (
        <div className="notepad_area_conatiner">
           <div className="box_1">
               <Notepad/>
            </div>
            <div className="box_2">
                <SmallGraph/>
            </div> 
            <div className="box_3">
                <Stat/>
            </div>
        </div>
    )
}

export default NotepadSection
