/**
 * file: App.js
 * author: Mahershi Bhavsar <msb753@uregina.ca>
 * version: 1.0
 * date-created: Feb 13, 2022
 * date-modified: Feb 15, 2022
 * purpose: Contains code to display user input
*/

import React, {Component} from 'react'
import {View, Text} from 'react-native'
import TextStyle from '../styles/TextStyle'
import GloablStyle from '../styles/GlobalStyle' 

/**
 * Input Display
 * 
 * Purpose: UI code to display the user input.
 * 
 * Parameter(s):
 * 
 * <1> inputList <Arrau>: Input to be displayed.
    For an input of kind 13 + 3,
    inputList will be ["1", "3", "+", "3"]
 */

export default class InputComponent extends  Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={GloablStyle.inputDisplay}>
        <Text style={TextStyle.inputDisplay}>
          {
            this.createText()
          }
        </Text>
     </View>
    )
  }

  /**
   * Create a <str> from the inputList <array> received as props.
   */
  createText(){
    let str = '';
    this.props.inputList.forEach((x)=>{
      str += x;
    })

    return str;
  }
}