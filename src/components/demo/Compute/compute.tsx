import React, { useState } from 'react';
import Demo from '../demo'
import './compute.scss'

const Compute = () => {

  const [equation, setEquation] = useState('0');
  const [isDecimalAdded, setDecimalAdded] = useState(false);
  const [isOperatorAdded, setOperatorAdded] = useState(false);
  const [isStart, setStart] = useState(false);

  // 点击Ac清除符号的时候
  const clear = () => {
    setEquation('0');
    setOperatorAdded(false);
    setDecimalAdded(false);
    setStart(false);
  };
  //点击正负号时候
  const calculateToggle = () => {
    if(isOperatorAdded || !isStart){
      return;
    }
    setEquation(equation + '* -1');
    calculate();
  };
 //点击百分号的时候
  const calculatePercentage = () => {
    if(isOperatorAdded || !isStart){
      return;
    }
    setEquation(equation + '* 0.01');
    calculate();
  };
  // 点击加减乘除、数字、小数点时
  const append = (character: string):void => {
    // 判断是否开始
    if(equation === '0' && !isOperator(character)){
      if(character === '.'){
        setEquation(equation + '' + character)
        setDecimalAdded(true);
      } else {
        setEquation('' + character);
      }
      setStart(true);
      return;
    }
    // 判断数字
    if(!isOperator(character)){
      if(character === '.' && isDecimalAdded){
        return;
      }
      if(character === '.'){
        setDecimalAdded(true);
        // 避免在输入小数位符号后直接输入运算符号
        setOperatorAdded(true);
      } else setOperatorAdded(false);
      setEquation(equation + '' + character);
    }
    // 判断运算符号
    if(isOperator(character) && !isOperatorAdded){
      console.log(character);
      setEquation(equation + character);
      setDecimalAdded(false);
      setOperatorAdded(true);
    }
  };

  // 用来判断character是否是加减乘除
  const isOperator = (character:string):boolean =>{
    return ['+', '-', '*', '÷'].indexOf(character) > -1;
  };
  //点击等于符号时
  const calculate = () => {
    let result = equation.replace(new RegExp('×', 'g'), '*').replace(new RegExp('÷', 'g'), '/');
    // 防止小数位过多，控制在9位之类
    // eslint-disable-next-line no-eval
    setEquation(parseFloat(eval(result).toFixed(9)).toString());
  };

  return (
    <Demo>
      <div className="calculator">
        <div className="result" style={{gridArea: 'result'}}>{equation}</div>
        <button style={{gridArea: 'ac'}} onClick={clear}>AC</button>
        <button style={{gridArea: 'plus-mius'}} onClick={calculateToggle}>±</button>
        <button style={{gridArea: 'precent'}} onClick={calculatePercentage}>%</button>
        <button style={{gridArea: 'add'}} onClick={() => {append('+')}}>+</button>
        <button style={{gridArea: 'substract'}} onClick={() => {append('-')}}>-</button>
        <button style={{gridArea: 'multiply'}} onClick={() => {append('×')}}>*</button>
        <button style={{gridArea: 'divide'}} onClick={() => {append('÷')}}>÷</button>
        <button style={{gridArea: 'equal'}} onClick={calculate}>=</button>

        <button style={{gridArea: 'number-1'}} onClick={() => {append('1')}}>1</button>
        <button style={{gridArea: 'number-2'}} onClick={() => {append('2')}}>2</button>
        <button style={{gridArea: 'number-3'}} onClick={() => {append('3')}}>3</button>
        <button style={{gridArea: 'number-4'}} onClick={() => {append('4')}}>4</button>
        <button style={{gridArea: 'number-5'}} onClick={() => {append('5')}}>5</button>
        <button style={{gridArea: 'number-6'}} onClick={() => {append('6')}}>6</button>
        <button style={{gridArea: 'number-7'}} onClick={() => {append('7')}}>7</button>
        <button style={{gridArea: 'number-8'}} onClick={() => {append('8')}}>8</button>
        <button style={{gridArea: 'number-9'}} onClick={() => {append('9')}}>9</button>
        <button style={{gridArea: 'number-0'}} onClick={() => {append('0')}}>0</button>

        <button style={{gridArea: 'dot'}} onClick={() => {append('.')}}>.</button>
      </div>
    </Demo>
  )
}

export default Compute;