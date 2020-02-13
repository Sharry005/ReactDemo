import React, { Component, Fragment } from 'react';
import { Router,Route,Switch } from 'react-router-dom';
// import { ReactInput,Slide,Button,Page } from 'react-input-owns';
import Start from './js/Start';
import Home from './js/Home';
import Demo from './js/gojs/Demo';
import One from './js/echartsdemo/One';
import './App.css';

class App extends Component{
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={(param)=>{
          return <Home />
        }} />
        <Route path="/second" component={(param)=>{
          return <Start />
        }} />
        <Route path="/gojs/demo" component={(param)=>{
          return <Demo />
        }} />
        <Route path="/echarts" component={(param)=>{
          return <One />
        }} />  
      </Fragment>
    )
  }
}

export default App;
