import React, {Component} from 'react';
import Mapping from './components/map'

const centerscreen = {
  backgroundColor: '#cbc5c4',
  display: 'flex',
  justifyContent: 'center',    /*zoom*/
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '100vh'
}

class App extends Component {
  
  render() {
    return (
        <div style={centerscreen} > 

            <h2>Crew Members</h2>
            <Mapping/>

        </div>
      );  }
}

export default App;
