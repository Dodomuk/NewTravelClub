
import React from 'react';
import { Provider } from 'mobx-react';

import store from './service/store';
import { Header } from './ui/page/common';


class Store extends React.Component {
  //
  render() {
    //
    const { children } = this.props;

    return (
      <Provider
        {...store}
      >
        {children}
      </Provider>
    );
  }
}

export default Store;
