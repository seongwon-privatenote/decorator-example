import React from 'react';
import ReactDOM from 'react-dom';
import { testDecorator } from './decorators';
import Abc from './Abc';

@testDecorator
class App extends React.Component {
  render() {
    return <Abc />;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
