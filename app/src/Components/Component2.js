import React, {Component} from 'react';

export default class Component2 extends Component {
    constructor(){
        super();
        this.state={
            input: ""
        }

    }
    
    changeInput(value) {
        this.setState({
            input: value
        })
    }
    
    render() {
        return (
            <div>
                <input onChange = {e => this.changeInput(e.target.value)}/>
                <span>{this.state.input}</span>
            </div>
        )
    }
}