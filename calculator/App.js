/**
 * file: App.js
 * author: Mahershi Bhavsar <msb753@uregina.ca>
 * Student Id: 200465975
 * version: 1.0
 * date-created: Feb 13, 2022
 * date-modified: Feb 15, 2022
 * purpose: Application Main file. Contains View Code and callback for any key press
*/

import React, {Component} from 'react'
import {View, SafeAreaView} from 'react-native'
import ButtonComponent from './src/components/ButtonComponent'
import ButtonStyle from './src/styles/ButtonStyle'
import GlobalStyle from './src/styles/GlobalStyle'
import InputDisplay from './src/components/InputDisplay'
import ExpressionDisplay from './src/components/ExpressionDisplay'
import {returnNewState} from './src/utils/processInput'


/**
 * CalculatorApp - Root Component
 * 
 * Contains state variables
 * <1> inputList <Array>: Holds user input in the following format
    ["1", "3", "+", "3"] for 13+3
 * <2> expressionString <str>: Holds the string of expression whose result is currently displayed.
 * <3> wasOp <bool>: If the last user input was an operation (+, -, *, /), set as true
    This is used in case of consecutive operation input where the latest input will override the last input. As a way of correcting user input regarding operations.
 * <4> hasOneOp <bool>: True, if the sequence of user input has already had an operation, the next operation input will trigger the sub-expression evaluation involving the           previous operation.
 * <5> lastOp <str>: Logs the last operation that was pressed by the user.
*/
class CalculatorApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputList: ["0"],
      expressionString: "",
      wasOP: false,
      hasOneOp: false,
      lastOp: ""
    };
  }

  /**
   * buttonPress - Method
   * 
   * Purpose: Callback passed to ButtonComponent which is then triggered on the said button. 
   * Parameter(s):
   * <1> buttonLabel: The buttonLabel for the ButtonComponent which was pressed and triggered the callback. 
   * 
   * Side Effect: Will set the state of CalculatorApp based on return from returnNewState method call. It tiggers returnNewState which handles user input.
   * 
   * Returns: NA 
  */
  buttonPress(buttonLabel){
    this.setState(
      returnNewState(buttonLabel, this.state)
    );
  }

  render(){
    return (
      <View style={GlobalStyle.mainStyle}>
        <ExpressionDisplay expressionString={this.state.expressionString} />
        <InputDisplay inputList={this.state.inputList} />
        <View>
          <View style={ButtonStyle.buttonRow}>
            <ButtonComponent 
              buttonLabel="AC" 
              large={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="DEL" 
              large={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="/" 
              isOp={true} 
              pressCallback={this.buttonPress.bind(this)}
              lastOp={this.state.lastOp}
            />
          </View>
          <View style={ButtonStyle.buttonRow}>
            <ButtonComponent 
              buttonLabel="1" 
              isNumeric={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="2" 
              isNumeric={true}
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="3" 
              isNumeric={true}
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="*" 
              isOp={true} 
              pressCallback={this.buttonPress.bind(this)}
              lastOp={this.state.lastOp}
            />
          </View>
          <View style={ButtonStyle.buttonRow}>
            <ButtonComponent 
              buttonLabel="4" 
              isNumeric={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="5" 
              isNumeric={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="6" 
              isNumeric={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="-" 
              isOp={true} 
              pressCallback={this.buttonPress.bind(this)}
              lastOp={this.state.lastOp}
            />
          </View>
          <View style={ButtonStyle.buttonRow}>
            <ButtonComponent 
              buttonLabel="7" 
              isNumeric={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="8" 
              isNumeric={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="9" 
              isNumeric={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="+" 
              isOp={true} 
              pressCallback={this.buttonPress.bind(this)}
              lastOp={this.state.lastOp}
            />
          </View>
          <View style={ButtonStyle.buttonRow}>
            <ButtonComponent 
              buttonLabel="0" 
              isNumeric={true} 
              large={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="." 
              isNumeric={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
            <ButtonComponent 
              buttonLabel="=" 
              isOp={true} 
              pressCallback={this.buttonPress.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default CalculatorApp;