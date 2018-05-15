import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h3>Progress Bar</h3>
          <div style={{ width: 200, margin: 5, borderRadius: 5, height: 10, backgroundColor: 'gray' }}>
            <div style={{ height: '100%', width: '52%', backgroundColor: 'red' }}></div>
          </div>
        </div>
        <Button type="primary">Click me</Button>
        <Button type="dashed">Click me</Button>
        <Button type="danger">Click me</Button>
        <Button type="green">Click me</Button>
        <Button>Click me</Button>
        <div>
          List goes here
          <List
            data={[1, 2, 3, 5, 1, 3, 2]}
            renderItem={(num, i) => <li key={i}>{num}</li>} />
          <List
            data={["Hello", "Good bye", "Wheres the syrup"]}
            renderItem={(words, i) => (
              <div style={{ padding: 3 }}>{words + ", eh"}</div>
            )}
          />
        </div>
        <div>
          <StyledButton primary size="large">Words</StyledButton>
          <StyledButton >Words</StyledButton>
        </div>

      </div >
    );
  }
}

export default App;


const fontSizes = {
  small: '14px',
  medium: '22px',
  large: '64px'
}
const StyledButton = styled.button`
  background-color: ${ props => props.primary ? 'salmon' : 'white'};
  color: ${props => props.primary ? 'white' : 'salmon'};
  border: ${props => props.primary ? '1px solid salmon' : '2px solid salmon'}
  border-radius: 5px;
  font-size: ${props => fontSizes[props.size]};
  padding: 4px;
`


class List extends Component {
  render() {
    const { data, renderItem } = this.props;
    const listItems = data.map((num, i) => renderItem(num, i))

    return (
      <div className="list">
        {listItems}
      </div>
    )
  }
}



class Button extends Component {
  render() {
    const { type, children } = this.props;
    const styleChoice = styles[type ? type : 'default']
    return (
      <button style={Object.assign({}, btnBase, styleChoice)}>{children}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string
}



let btnBase = {
  borderRadius: 12,
  padding: 12
};

let primaryStyle = {
  backgroundColor: '#40a9ff',
  color: 'white'
};

let defaultStyle = {
  borderWidth: 1,
  borderColor: 'lightGray'
};

let dashed = {
  borderWidth: 1,
  borderColor: 'lightGray',
  borderStyle: 'dashed'
}

let danger = {
  borderWidth: 1,
  borderColor: 'gray',
  backgroundColor: 'lightGray',
  color: 'red'
}

let styles = {
  primary: primaryStyle,
  default: defaultStyle,
  danger: danger,
  dashed: dashed,
  green: {
    backgroundColor: 'green'
  }
}