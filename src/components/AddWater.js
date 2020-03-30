import React, { Component } from 'react';


export default class AddWater extends Component {
    constructor(props){
        super(props)
        this.state = {
            intake: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        console.log("HandleChange", e.target.value)
        this.setState({
            intake: e.target.value
        })
    }

    handleClick() {
        this.props.addWater(this.state.intake)
    
        this.setState({
            intake: 0
        })
    }

    render(){
        return (
            <div className="add-water">

                <div className="add-header">
                    <h2>I'm thirsty...</h2>
                </div>
                
                <div className="add-body">
                    <span>Drink Me: 
                    <select
                    // type="number"
                    name="newWater"
                    value={this.state.intake}
                    onChange={(e) => this.handleChange(e)}>
                        <option>oz</option>
                        <option>8</option>
                        <option>16</option>
                        <option>24</option>
                        <option>32</option>
                        <option>40</option>
                        <option>48</option>
                        <option>56</option>
                        <option>64</option>
                        </select>
                        </span>
                </div>

                <div className="add-button">
                     <button onClick={this.handleClick}>Add</button>
                </div>

            </div>
        )
    }
}