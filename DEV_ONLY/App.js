import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import bix from '../src/bix';
import bixDefaults from '../src/defaults';

bix
    .extend(bixDefaults)
    .extend({
      testButton: {
        ...bix.button,
        backgroundColor: 'red'
      },
      container: {
        border: '1px solid black',
        height: 500,
        width: 400
      }
    });

bix.stylesheet('test-stylesheet', {
  '.some-selector': {
    appearance: 'none',
    backgroundColor: 'blue'
  }
});

const Button = bix.radium(<button/>);

@bix.radium
class App extends Component {
  render() {
    return (
      <div style={bix.container}>
        App

        <Button
            style={bix.testButton}
            type="button"
        >
            test
        </Button>
      </div>
    );
  }
}

const div = document.createElement('div');

div.id = 'app-container';

render((
    <App/>
), div);

document.body.appendChild(div);
