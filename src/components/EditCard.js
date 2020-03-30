import React, { Component } from 'react';

export default class EditCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            actual: this.props.actual
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        this.setState({
          actual: e.target.value
        })
      }

      handleClick(){
        this.props.updateWater(this.props.id, this.state.actual)
           this.props.handleEdit() 
      }

    render(){
        return (
            <div>
                <select
                value={this.state.actual}
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
                <button onClick={this.handleClick}>Save</button>
            </div>
        )
    }
}