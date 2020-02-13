import React, { Component } from 'react';
import history from '../common/history';
class Home extends Component{
    constructor(props) {
        super(props);
        this.firstClick = this.firstClick.bind(this);
        this.startClick = this.startClick.bind(this);
        this.threeClick = this.threeClick.bind(this);
    }
    firstClick() {
        history.push("/first");
    }
    startClick() {
        history.push("/second");
    }
    threeClick() {
        history.push("/gojs/demo");
    }
    fourClick() {
        history.push("/echarts");
    }
    render() {
        return (
            <div>
                <button onClick={this.firstClick}>gojs</button>
                <button onClick={this.startClick}>Star</button>
                <button onClick={this.threeClick}>gojs-Demo</button>
                <button onClick={this.fourClick}>echarts</button>
            </div>
        )
    }
}
export default Home;