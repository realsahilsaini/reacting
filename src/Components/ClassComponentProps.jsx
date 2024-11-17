import React, { Component } from 'react'

class ClassComponentProps extends Component{
  render(){
    return <h1 className='bg-yellow-400 px-2 py-1 rounded-lg w-fit'>Hello, {this.props.name}!</h1>
  }
}


/*

Default Props and Prop Types
Set default values for props using defaultProps and validate props using propTypes.

import PropTypes from 'prop-types';

class ClassComponentProps extends React.Component {
  static defaultProps = {
    name: 'Guest',
  };

  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}



*/


/*
Usage: 
<ClassComponentProps name='Sahil' />
*/

export default ClassComponentProps