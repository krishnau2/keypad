import React from 'react';
import {debounce} from 'throttle-debounce';
import Key from './key';
import InputField from './InputField';
import { KeyMap } from '../constants/AppConstants'

class Keypad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result: "",
            currentKey: "",
            currentKeyCount: 0,
            currentLetter: ""
        }
        this.updateResult = debounce(500, this.updateResult);
    }
    
    handleClick = (key) => {
        console.log("Key: ", key);
        let currentKeyCount, currentLetter = '';
        if(key === this.state.currentKey){
            currentKeyCount = this.state.currentKeyCount + 1;
        }else{
            currentKeyCount = 1;
        }
        currentLetter = this.getCurrentLetter(key, currentKeyCount);

        this.setState({
            currentKey: key,
            currentKeyCount: currentKeyCount,
            currentLetter: currentLetter
        });

        this.updateResult();
    }

    updateResult = () => {
        this.setState({
            result: this.state.result + this.state.currentLetter,
            currentLetter: "",
            currentKey: "",
            currentKeyCount: 0,
        });
    }

    getCurrentLetter = (key, count) => {
        let index;
        let remainder;
        let letter = '';
        let mappedLetters = KeyMap[key];
        let mappedLettersLength = mappedLetters.length;

        if(count > mappedLettersLength){
            remainder = count % mappedLettersLength;
            index = remainder === 0 ? mappedLettersLength - 1 : remainder - 1
        }else{
            index = count - 1
        }

        letter = mappedLetters[index];
        letter = letter === '_' ? ' ' : letter;
        return letter;
    }

    clearData = () => {
        this.setState({
            result: "",
            currentKey: "",
            currentKeyCount: 0,
            currentLetter: ""
        });
    }

    removeLastLetter = () => {
        let newResult = this.state.result.slice(0, -1);
        this.setState({
            result: newResult
        });
    }

    render() {
        return(
            <div className="keypad-container">
                <InputField
                    result={this.state.result}
                    currentLetter={this.state.currentLetter}
                />
                <div className="actions">
                    <button className="clear-button" onClick={this.clearData}>Clear</button>
                    <button className="remove-button" onClick={this.removeLastLetter}>Remove</button>
                    <div className="clear"></div>
                </div>
                <div className="key-container" >
                    <Key label="1" handleClick={this.handleClick.bind(this, '1')} />
                    <Key label="2" handleClick={this.handleClick.bind(this, '2')} />
                    <Key label="3" handleClick={this.handleClick.bind(this, '3')} />
                    <Key label="4" handleClick={this.handleClick.bind(this, '4')} />
                    <Key label="5" handleClick={this.handleClick.bind(this, '5')} />
                    <Key label="6" handleClick={this.handleClick.bind(this, '6')} />
                    <Key label="7" handleClick={this.handleClick.bind(this, '7')} />
                    <Key label="8" handleClick={this.handleClick.bind(this, '8')} />
                    <Key label="9" handleClick={this.handleClick.bind(this, '9')} />
                    <Key label="*" handleClick={this.handleClick.bind(this, '*')} />
                    <Key label="0" handleClick={this.handleClick.bind(this, '0')} />
                    <Key label="#" handleClick={this.handleClick.bind(this, '#')} />
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default Keypad;