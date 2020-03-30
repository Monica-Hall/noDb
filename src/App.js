import React, { Component } from 'react';
import axios from "axios"
import Card from "./components/Card"
import AddWater from "./components/AddWater"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      entry: [] 
    }

    this.deleteWater = this.deleteWater.bind(this)
    this.addWater = this.addWater.bind(this)
    this.updateWater = this.updateWater.bind(this)

  }

componentDidMount(){
  axios.get("api/water").then(res => {
    this.setState({
      entry: res.data
    })
  })
  .catch(err => console.log(err))
}

deleteWater(id){
  axios.delete(`/api/delete_water/${id}`).then(res => {
    this.setState({
      entry: res.data
    })
  })
  .catch(err => console.log(err))
}

addWater(newWater){
  axios.post(`/api/add_water`, {actual: newWater}).then(res => {
    this.setState({
      entry: res.data
    })
  })
  .catch(err => console.log(err))
}

updateWater(id, newActual){
  axios.put(`api/update_water/${id}`, {actual: newActual}).then(res => {
    this.setState({
      entry: res.data
    })
  })
}


  render() {
  return (
    <div className="App">
      <Header/>
      <AddWater 
      entry={this.state.entry} 
      addWater={this.addWater}/>
      <Card 
      entry={this.state.entry}
      deleteWater={this.deleteWater} 
      updateWater={this.updateWater}
      />
      <Footer/>
    </div>
  );
  }
}

export default App;
