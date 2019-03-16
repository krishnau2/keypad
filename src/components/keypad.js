import React from 'react';
import {debounce} from 'throttle-debounce';
import Key from './key';
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

    getLettersForKey = (key) => {
        let letters = KeyMap[key].slice(0, -1).join(' ');
        return letters;
    }

    render() {
        return(
            <div className="keypad-container">
                <div className="input-field">
                    {this.state.result}
                    {this.state.currentLetter}
                    <span className="blinker">|</span>
                </div>
                <div className="key-container" >
                    <Key key="1" label="1" letters={this.getLettersForKey('1')} handleClick={this.handleClick.bind(this, '1')} />
                    <Key key="2" label="2" letters={this.getLettersForKey('2')} handleClick={this.handleClick.bind(this, '2')} />
                    <Key key="3" label="3" letters={this.getLettersForKey('3')} handleClick={this.handleClick.bind(this, '3')} />
                    <Key key="4" label="4" letters={this.getLettersForKey('4')} handleClick={this.handleClick.bind(this, '4')} />
                    <Key key="5" label="5" letters={this.getLettersForKey('5')} handleClick={this.handleClick.bind(this, '5')} />
                    <Key key="6" label="6" letters={this.getLettersForKey('6')} handleClick={this.handleClick.bind(this, '6')} />
                    <Key key="7" label="7" letters={this.getLettersForKey('7')} handleClick={this.handleClick.bind(this, '7')} />
                    <Key key="8" label="8" letters={this.getLettersForKey('8')} handleClick={this.handleClick.bind(this, '8')} />
                    <Key key="9" label="9" letters={this.getLettersForKey('9')} handleClick={this.handleClick.bind(this, '9')} />
                    <Key key="*" label="*" handleClick={this.handleClick.bind(this, '*')} />
                    <Key key="0" label="0" letters={this.getLettersForKey('0')} handleClick={this.handleClick.bind(this, '0')} />
                    <Key key="#" label="#" handleClick={this.handleClick.bind(this, '#')} />
                </div>
                <div className="clear"></div>              
            </div>
        );
    }
}

export default Keypad;