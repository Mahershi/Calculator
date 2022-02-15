/**
 * file: processInput.js
 * author: Mahershi Bhavsar <msb753@uregina.ca>
 * version: 1.0
 * date-created: Feb 14, 2022
 * date-modified: Feb 15, 2022
 * purpose: Code for a function that is triggered on user input
*/

import React from 'react'


/**
 * getStringExp
 * 
 * Purpose: Create an expression string from inputList <Array>.
 * 
 * Parameter(s):
 * <1>currentState: Current State of the CalculatorApp.
 * 
 * Return: <str> Expression string to be evaluated.
 */
function getStringExp(currentState){
  let exp = '';
  (currentState.inputList).forEach((x)=>{
    exp += x;
  });
  return exp;
}


/**
 * replaceOperator
 * 
 * Purpose: If operators are pressed consecutively, it results in an invalid expression.
 * In such a case, the lastest operation is considered for evaluation.
 * 
 * Parameter(s):
 * <1>buttonLabel <str>: Button Label that was pressed
 * <2>currentState: Current State of the CalculatorApp.
 * 
 * Return: newState for the CalculatorApp.
 */
function replaceOperator(buttonLabel, currentState){
  currentState.inputList.pop();
  currentState.inputList.push(buttonLabel);
  return {
    inputList: currentState.inputList,
    lastOp: buttonLabel
  };
}


/**
 * formatForDecimal
 * 
 * Purpose: For a decimal value result, it is formatted to show atmost 7 decimal places                 with no trailing zeroes.
 * 
 * Parameter(s):
 * <1>result: The result produced on evaluating the expression.
 * 
 * Return: The formatted result. 
 */
function formatForDecimal(result){
  if(!Number.isInteger(result)){
    result = result.toFixed(7).replace(/(\.0+|0+)$/, '');
  }
  return result;
}


/**
 * returnNewState
 * 
 * Purpose: 
 * Triggered on each button press, handled accordingly based on whether it was a numberic       button, an operator or an action.
 * 
 * For a numeric button, it just logs it into the inputList.
 * For an operation, it logs it if it was the first operation encoutered.
 * If it was a second operation, it evaluated the result for the previous operation and         used the result as an operand for the newly pressed operation. Also sets the                expressionString for display.
 * If it was a second operation and the previous expression only had one operand, it simply     replaces the previous operation.
 * 
 * Parameter(s):
 * 
 * <1>buttonLabel <str>: Button label for the button that was pressed
 * 
 * <2>currentState: Current State of the Calculator App.
 * 
 * Return: Returns the new State for the calculator app to rerender.
 * 
 * SideEffects: Results in rerender of the app.
 */
export function returnNewState(buttonLabel, currentState){
  let newState;
  switch(buttonLabel){
    case '=':
      {
        let lastInput = currentState.inputList[currentState.inputList.length - 1]
        if(lastInput == '+' || lastInput == '-' || lastInput == '*' || lastInput == '/')            {
          newState = {
            lastOp: ''
          }
        }else{
          let exp = getStringExp(currentState);
          let result = eval(exp);
          result = formatForDecimal(result);
          let newList = [result.toString()];
          newState = {
            inputList: newList,
            expressionString: exp + " = ",
            hasOneOp: false,
            wasOP: false,
            lastOp: buttonLabel
          }
        }
      }
      break;
    case 'AC':
      newState = {
        inputList: ["0"],
        wasOP: false,
        expressionString: "",
        hasOneOp: false,
        lastOp: buttonLabel
      }
      break;

    case 'DEL':
      {
        let last = currentState.inputList[currentState.inputList.length - 1];
        let lastWasOp = false
        if(last == '+' || last == '-' || last == '*' || last == '/'){
          lastWasOp = true
        } 
        newState = {
          inputList: currentState.inputList.slice(0, currentState.inputList.length-1),
          wasOP: false,
          hasOneOp: lastWasOp ? false : currentState.hasOneOp,
          lastOp: buttonLabel
        }
      }
      break;

    case '+':
    case '-':
    case '/':
    case '*':
      {
        let lastInput = currentState.inputList[currentState.inputList.length - 1]
        if(lastInput == '+' || lastInput == '-' || lastInput == '*' || lastInput == '/')            {
          newState = replaceOperator(buttonLabel, currentState);
        }
        else{
          if(currentState.hasOneOp){
            let exp = getStringExp(currentState);
            let result = eval(exp);
            result = formatForDecimal(result);
            let newList = [result.toString(), buttonLabel];
            newState = {
              inputList: newList,
              expressionString: exp + " = ",
              hasOneOp: true,
              wasOP: true,
              lastOp: buttonLabel
            }
          }else{
            currentState.inputList.push(buttonLabel);
            newState = {
              inputList: currentState.inputList,
              wasOP: true,
              hasOneOp: currentState.wasOP ? false : true,
              lastOp: buttonLabel
            } 
          } 
        }
      }
      break;
    default:
      if(currentState.inputList.length == 1 && currentState.inputList[0] == '0'){
        newState = {
          inputList: [buttonLabel],
          wasOP: false,
          lastOp: buttonLabel
        }
      }
      else{
        currentState.inputList.push(buttonLabel);
        newState = {
          inputList: currentState.inputList,
          wasOP: false,
          lastOp: buttonLabel
        }
      }  
  }
  return newState;
}