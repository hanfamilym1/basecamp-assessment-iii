import React, {Component} from 'react';

export default class Component1 extends Component {
    constructor(){
        super();
        this.state={
            clicked: false
        }
    }

    spanchange() {
            this.setState({
                clicked: !this.state.clicked
            })
            console.log(this.state.clicked);
    }

    render() {
        return (
            <div>
                <button onClick = {() => this.spanchange()}>Click Me</button>
                {this.state.clicked ? <span>You pressed the button</span> :
                <span>Press the button please.</span>}
            </div>
        )
    }
}