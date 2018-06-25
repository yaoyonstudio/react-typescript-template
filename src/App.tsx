import * as React from 'react';
import './style.css';

import Routers from './routers';

class App extends React.Component {
  public render() {
    return (
      <Routers {...this.props} />
    );
  }
}

export default App;
