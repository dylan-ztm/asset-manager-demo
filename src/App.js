import React, { Component } from 'react';
import Table from './components/Table/Table';
import Form from './components/Form/Form';

// App Component
class App extends Component {
    state = {
        characters: [],
    };

    // removeCharacter method
    removeCharacter = (index) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        });
    } //end removeCharacter

    // handleSubmit
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]});
    } //end handleSubmit

    render() {
        const {characters} = this.state;

        return (
            <div className="container">
                <h1>Asset Manager Demo</h1>
                <p>Add a new item to the asset inventory.</p>
                <Table 
                    characterData={characters} 
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add new asset</h3>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    } //end render
} //end App Component

export default App;