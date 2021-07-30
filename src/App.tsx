import React from 'react';
import Store from './Store';
import Routes from './Routes';

class App extends React.Component {
  //
  render() {
    //
    const menuList =['main','club','member'];

    return (
      <Store>
        <Routes />
      </Store>
    );
  }
}

export default App;
