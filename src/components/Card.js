import React from 'react';
import Tracker from "./Tracker"

export default function Card(props){
    
    const mappedWater = props.entry.map(elem => {
        return (
        <div key={elem.id}>
            <Tracker 
            entry={elem} 
            deleteWater={props.deleteWater} 
            updateWater={props.updateWater}/>
            </div>
            )
        })

        return (
            <div className="drank">
                <hr/>
                <h3>I've been drinkin'...</h3>
                <div className="mapped">
                {mappedWater}
                </div>
            </div>
        )
}
  