 /**
 * file: App.js
 * author: Mahershi Bhavsar <msb753@uregina.ca>
 * version: 1.0
 * date-created: Feb 13, 2022
 * date-modified: Feb 15, 2022
 * purpose: Code for globally used styles
*/

 import React from 'react'
 import {StyleSheet, Dimensions} from 'react-native'

 export default StyleSheet.create(
   {
     mainStyle: {
       backgroundColor: "#020202",
       flex: 1,
       padding: 4,
       paddingBottom: 20,
     },

     inputDisplay: {
       alignItems: "flex-end",
       justifyContent: "flex-end",
       padding: 8,
       flex: 1,
     },

     expressionDisplay: {
       alignItems: "flex-end",
       justifyContent: "flex-end",
       padding: 8,
       flex: 1,
     }
   }
 )