import React, { Component } from 'react';
import EditCard from "./EditCard"
import Button from "./Button"

export default class Tracker extends Component{
    constructor(props){
        super(props)

        this.state = {
            edit: false
        }

        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(){
        let {edit} = this.state

        this.setState({
            edit: !edit
        })
    }

    render(){
        // destructure here 
        let {day, goal, id, actual} = this.props.entry

    return (
        <div className="intake-box">
            <div className="day-header">
            <p>{day}</p>
            </div>
            <p>Goal: {goal}oz.</p>

            {this.state.edit ? <EditCard 
            id={id} actual={actual} 
            updateWater={this.props.updateWater} 
            handleEdit={this.handleEdit}/> :
            <span>Intake: {actual}oz.</span>}
                 <Button 
                 value={"Delete"} 
                 id={id} 
                 function={this.props.deleteWater}/>

                 <Button 
                 value={"Edit"} 
                 id={id} 
                 function={this.handleEdit}/>
        </div>
    )
  }
}