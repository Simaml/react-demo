import React, { Component } from 'react';
import { Button } from 'antd';
import { store, newStore } from './store/store';
import { changeName } from './actions/action';

class App extends Component {
  checkName = () => {
    changeName();
    console.log(store.getState(), newStore.getState())
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
