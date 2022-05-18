import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      name:"",
    }
  }
   Increase(){
    this.setState({
      count: this.state.count + 1
    })
  }
  Decrease(){
    this.setState({
      count: this.state.count - 1
    })
  }
  NameChangeHandle(value){
    this.setState({
      name:value,
    })
  }
  
  
  render() {
    
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>Hello i will type whatever you type {this.state.name}</h1>
        <button onClick={()=>{this.Increase()}}>Increase Me</button>
        <button onClick={()=>{this.Decrease()}}>Decrease Me</button>
        <input type="text" onChange={(e)=>this.NameChangeHandle(e.target.value)} value={this.state.name}/>
      </div>
    )
  }
}

export default App