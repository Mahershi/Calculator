 import React from 'react'
 /**
 * file: App.js
 * author: Mahershi Bhavsar <msb753@uregina.ca>
 * version: 1.0
 * date-created: Feb 13, 2022
 * date-modified: Feb 15, 2022
 * purpose: Code for styles of various kind of buttons
*/
 
 import {StyleSheet, Dimensions} from 'react-native'

 export default StyleSheet.create(
   {
     /**
      * Common Button Style
      * 
      * Purpose: Responsible for shape and size of each.
      * 
      * Render Circular Buttons based on available screen width.
      */
      commonStyle: {
        alignItems: "center",
        height: Dimensions.get('window').width * 0.22,
        width: Dimensions.get('window').width * 0.22,
        justifyContent: "center",
        borderRadius: Dimensions.get('window').width * 0.25,
        margin: 4,
      },

      /**
       * If a ButtonComponent matched the <lastOp>, it is displayed with orange background.
       */
      pressedOperation: {
        backgroundColor: "orange"
      },

      numericButton: {
        backgroundColor: "#3C3938",
      },

      opButton: {
        backgroundColor: "#E1DDDB"
      },

      buttonRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
      },
      
   }
 )