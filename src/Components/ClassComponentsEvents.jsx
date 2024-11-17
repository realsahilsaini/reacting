import React from 'react'



class ClassComponentsEvents extends React.Component {
  handleClick = () => {
    alert('Button clicked!');
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}



// class ClassComponentsEvents extends React.Component {
//   handleClick = () => {
//     alert('Button clicked!');
//   };

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }


export default ClassComponentsEvents