import React, { Component } from 'react';
import { Button } from 'antd';
import { store } from './store/store';
import { changeName } from './actions/action';
import 'antd/dist/antd.css';

class App extends Component {
  checkName = () => {
    changeName();
    console.log(store.getState())
  }
  render() {
    return (
      <div className="App">
        <p>{store.getState().name}</p>
        <Button onClick={this.checkName}>ChangeName</Button>
      </div>
    );
  }
}

export default App;
