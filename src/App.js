// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
var ReactFauxDOM = require('react-faux-dom')

var FrequencyChart = React.createClass ({
  mixins: [ReactFauxDOM.mixins.core],
   // Initalising this.state.chart is necessary
    getInitialState: function () {
      return { chart: 'LOADING ' }
    },
    componentDidMount: function () {
      // You need the ReactFauxDOM.mixins.core to use this
      const div = this.connectFauxDOM('div', 'chart');

      let data = this.props.data
      let margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = this.props.width - margin.left - margin.right,
        height = this.props.height - margin.top - margin.bottom;
     //Same as original code
     //...
    },
      render: function () {
      return
        <div>
          {this.state.chart}
        </div>
    }
  });

module.exports = FrequencyChart;
