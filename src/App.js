import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChangeHandler = ( event ) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  deleteCharHandler = ( index ) => {
    let charactersSplitted = null;
    charactersSplitted = this.state.inputValue.split( '' );
    charactersSplitted.splice( index, 1 );
    this.setState({ inputValue: charactersSplitted.join( '' ) });
  }

  render() {
    let characters, charactersSplitted = null;
    charactersSplitted = this.state.inputValue.split( '' );

    if( charactersSplitted.length > 5 ) {
      characters = (
        <div>
          {charactersSplitted.map( (character, index) => {
            return <CharComponent 
                      char={character} 
                      key={index}
                      click={() => this.deleteCharHandler( index )}
                    />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <input type="text" 
               onChange={this.inputChangeHandler} 
               value={this.state.inputValue}/>
        <ValidationComponent length={this.state.inputValue.length} />
        {characters}
      </div>
    );
  }
}

export default App;
