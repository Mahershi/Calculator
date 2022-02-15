/**
 * file: App.js
 * author: Mahershi Bhavsar <msb753@uregina.ca>
 * version: 1.0
 * date-created: Feb 13, 2022
 * date-modified: Feb 15, 2022
 * purpose: Code for button component
*/

import React, {Component} from 'react'
import {View, Pressable, Text} from 'react-native'
import ButtonStyle from '../styles/ButtonStyle'
import TextStyle from '../styles/TextStyle'

/**
 * Button Component
 * 
 * Purpose: UI code for Buttons.
 * 
 * Parameter(s):
 * 
 * <1>buttonLabel <str>: The label for the button to be rendered
 * 
 * <2>pressCallback <function>: The callback from the App.js to be triggered when button is    pressed.
 * 
 * Note: All the buttons have same callback.
 * 
 * <3>large <bool>: If true, render button with a flex:1 to occupy all the available space     in the button row.
 * 
 * <4>lastOp <str>: Only passed to ButtonComponents whose label is an operation.
    If the lastOp and buttonLabel to be rendered are same, apply ButtonStyle accordingly.
 * <5>isNumeric <bool>: If the buttonLabel is numeric, apply style accordingly.
 * 
 * <6>isOp <bool>: If the buttonLabel is operation, apply style accordingly.
 */
export default class ButtonComponent extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <Pressable
          onPress={()=>{
            this.props.pressCallback(this.props.buttonLabel);
          }}
          style={
            [
              ButtonStyle.commonStyle, 
              this.getButtonStyle(), 
              this.props.large? {flex: 1, flexGrow: 1} : {flexShrink: 1},
              this.props.lastOp == this.props.buttonLabel ? ButtonStyle.pressedOperation : {}
            ]}
        > 
         
            <Text style={this.getTextStyle()}>{this.props.buttonLabel}</Text>
         
        </Pressable>
    );
  }


  /**
   * Return ButtonStyle based on what kind of buttonLabel is supposed to be rendered.
   */
  getButtonStyle(){
    return (this.props.isNumeric ? ButtonStyle.numericButton : ButtonStyle.opButton)
  }

  /**
   * Return TextStyle based on what kind of buttonLabel is supposed to be rendered.
   */
  getTextStyle(){
    return (
      this.props.isNumeric
      ? TextStyle.numericButton 
      : (this.props.isOp 
          ? [TextStyle.opButton, this.props.lastOp == this.props.buttonLabel ? TextStyle.pressedOpButton : {}] 
          : TextStyle.actionButton))
  }
}