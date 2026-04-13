import React, { Component } from 'react'

class ClassState extends Component {
    
addOne = () => {
            this.setState (prevState => {
                return {
                    counter: prevState.counter + 1
                }
            })
}

    constructor(props) {
        super(props)
        
        this.state = {
            counter: 0
        }
    }
    
    render() {
        return (
            <div>   
                <p>Class State: {this.state.counter} </p>
                <button onClick={this.addOne}>State dans class</button>
            </div>
        )
    }
}

export default ClassState