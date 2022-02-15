 /**
 * file: App.js
 * author: Mahershi Bhavsar <msb753@uregina.ca>
 * version: 1.0
 * date-created: Feb 13, 2022
 * date-modified: Feb 15, 2022
 * purpose: Code for styles of various kinds of texts
*/

 import React from 'react'
 import {StyleSheet, Dimensions} from 'react-native'

 export default StyleSheet.create(
   {
     numericButton: {
       color: "white",
       fontSize: 22
     },
    
    opButton: {
       color: "black",
       fontSize: 22,
       fontWeight: "bold"
    },

    pressedOpButton: {
      color: "white",
      fontSize: 22,
      fontWeight: "bold"
    },
    
    actionButton: {
      color: "black",
      fontSize: 20
    },

    inputDisplay: {
      color: "#e8e8e8",
      fontSize: 64
    },

    expressionDisplay: {
      color: "#c1c1c1",
      fontSize: 28
    }
   }
 )