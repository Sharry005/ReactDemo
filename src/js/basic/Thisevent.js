import React, { Component } from 'react';
class ThisEvent extends Component {
    constructor(props) {
        super(props);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick7 = this.handleClick7.bind(this,'方式7');
    }
    handleClick2() {
        console.log(2);
    }
    handleClick3() {
        console.log(3,this);
    }
    handleClick4() {
        console.log(4,this);
    }
    handleClick5(msg) {
        return (e) => {
            console.log(5,msg);
        }
    }
    handleClick6(msg) {
        console.log(6,msg);
    }
    handleClick7(msg) {
        console.log(7,msg);
    }

    handleClick8 = (e) => {
        console.log(8,this);
    }
    handleClick9 = (msg) => (e) => {
        console.log(9,msg)
    }
    render() {
        return (
            <Fragment>
                <div onClick={() => console.log(1)}>方式1</div>
                <div onClick={() => this.handleClick2()}>方式2</div>
                <div onClick={this.handleClick3}>方式3</div>
                <div onClick={this.handleClick4.bind(this)}>方式4</div>
                <div onClick={this.handleClick5('方式5')}>方式5</div>
                <div onClick={this.handleClick6.bind(this,'方式6')}>方式6</div>
                <div onClick={this.handleClick7}>方式7</div>
                <div onClick={this.handleClick8}>方式8</div>
                <div onClick={this.handleClick9('方式9')}>方式9</div>
            </Fragment>
        )
    }
}
export default ThisEvent;