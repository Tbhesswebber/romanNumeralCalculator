import React, { Component } from 'react';
import styled from 'styled-components';

import { parseArabic, parseRoman } from '../../core/romanNumerals';
import Button from './components/ButtonUI';
import Screen from './components/ScreenUI';

const CalculatorUI = styled.div`
  height: 90vmin;
  width: 60vmin;
  background-color: #999999;
  border-radius: 5vmin;
  box-shadow: 0px 20px 30px -10px #00000050, 10px 10px 30px -10px #00000025, -10px 10px 30px -10px #00000025;
  display: grid;
  padding: 6vmin;
  grid-gap: 2vmin;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    'screen screen screen'
    'M clear divide'
    'C D multiply'
    'X L subtract'
    'I V add'
    'eq eq eq';
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { operand1: '', operand2: '', operator: '', view: '' };
  }

  add = () => {
    this.setState(prevState => {
      const operand1Value = parseRoman(prevState.operand1);
      const operand2Value = parseRoman(prevState.operand2);
      const result = parseArabic(operand1Value + operand2Value);
      return { view: result };
    });
  };

  subtract = () => {
    this.setState(prevState => {
      const operand1Value = parseRoman(prevState.operand1);
      const operand2Value = parseRoman(prevState.operand2);
      const result = parseArabic(operand1Value - operand2Value);
      return { view: result };
    });
  };

  multiply = () => {
    this.setState(prevState => {
      const operand1Value = parseRoman(prevState.operand1);
      const operand2Value = parseRoman(prevState.operand2);
      const result = parseArabic(operand1Value * operand2Value);
      return { view: result };
    });
  };

  divide = () => {
    this.setState(prevState => {
      const operand1Value = parseRoman(prevState.operand1);
      const operand2Value = parseRoman(prevState.operand2);
      const result = parseArabic(operand1Value / operand2Value);
      return { view: result };
    });
  };

  setOperator = operator => e => {
    e.preventDefault();
    this.setState({ operator });
  };

  buildOperand = ({ target }) => {
    const { operator } = this.state;
    if (operator) {
      this.setState(prevState => ({ operand2: `${prevState.operand2}${target.textContent}` }));
    } else {
      this.setState(prevState => ({ operand1: `${prevState.operand1}${target.textContent}` }));
    }
  };

  clear = () => {
    this.setState({ operand1: '', operand2: '', operator: '', view: '' });
  };

  evaluate = () => {
    const { operand1, operand2, operator } = this.state;
    if (operand1 && operand2 && operator) this[operator]();
  };

  render() {
    const { view, operand2, operand1 } = this.state;
    return (
      <CalculatorUI>
        <Screen>{view || operand2 || operand1}</Screen>
        <Button type="number" onClick={this.buildOperand}>
          <p>M</p>
        </Button>
        <Button onClick={this.clear}>
          <p>CE</p>
        </Button>
        <Button type="operator" onClick={this.setOperator('divide')}>
          <p>&divide;</p>
        </Button>
        <Button type="number" onClick={this.buildOperand}>
          <p>C</p>
        </Button>
        <Button type="number" onClick={this.buildOperand}>
          <p>D</p>
        </Button>
        <Button type="operator" onClick={this.setOperator('multiply')}>
          <p>&times;</p>
        </Button>
        <Button type="number" onClick={this.buildOperand}>
          <p>X</p>
        </Button>
        <Button type="number" onClick={this.buildOperand}>
          <p>L</p>
        </Button>
        <Button type="operator" onClick={this.setOperator('subtract')}>
          <p>&minus;</p>
        </Button>
        <Button type="number" onClick={this.buildOperand}>
          <p>I</p>
        </Button>
        <Button type="number" onClick={this.buildOperand}>
          <p>V</p>
        </Button>
        <Button type="operator" onClick={this.setOperator('add')}>
          <p>+</p>
        </Button>
        <Button cols={3} type="operator" onClick={this.evaluate}>
          <p>=</p>
        </Button>
      </CalculatorUI>
    );
  }
}
