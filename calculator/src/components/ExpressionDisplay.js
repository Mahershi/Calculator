/**
 * file: App.js
 * author: Mahershi Bhavsar <msb753@uregina.ca>
 * version: 1.0
 * date-created: Feb 13, 2022
 * date-modified: Feb 15, 2022
 * purpose: Contains Code to display last expression evaluated
*/

import React, {Component} from 'react'
import {View, Text} from 'react-native'
import TextStyle from '../styles/TextStyle'
import GlobalStyle from '../styles/GlobalStyle'


/**
 * Expression Display
 * 
 * Purpose: UI code to display the expression recently evaluated.
 * 
 * Parameter(s):
 * 
 * <1> expressionString <str>: Expression string to be displayed.
 */
export default class ExpressionDisplay extends Component{
  

  render(){
    return (
      <View style={GlobalStyle.expressionDisplay}>
        <Text style={TextStyle.expressionDisplay}>{this.props.expressionString}</Text>
      </View>
    );
  }
}