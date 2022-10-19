import React, { Component } from 'react';
import '../css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeslaBattery from '../container/TeslaBattery';

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery counterDefaultVal={counterDefaultVal}/>
        <Footer />
      </div>
    );
  }
}

export default App;
