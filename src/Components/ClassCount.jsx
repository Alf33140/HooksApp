import React, { Component } from 'react'

export class ClassCount extends Component {

  constructor(props) {
    super(props)
    this.state = {
       count: 0,
       name:''
    };
  }

  componentDidMount() {
    
    console.log('componentDidMount');
    document.title = `Vous avez cliqué ${this.state.count} fois`
  }
 
  // componentDidUpdate(prevprops, prevState) {
  //     console.log('componentDidUpdate');
  //   if (this.state.count !== prevState.count) {
  //     console.log('la mise a jour du titre');
  //   // console.log('componentDidUpdate');
  //   document.title = `Vous avez cliqué ${this.state.count} fois`
  // }}

  render() {
    return (
      <div className="text-center">
        <h1>Vous avez cliqué {this.state.count} fois</h1>
        
        <button className="btn btn-primary" onClick={() => this.setState({ count: this.state.count + 1 })}>Compte</button>
        <input type="text" value={this.state.name} onChange={
          (e) => this.setState({ 
            name: e.target.value })} />
      </div>
    )
  }
}

export default ClassCount
