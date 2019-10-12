import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {count: 0}
  }
  
  updateCount(val){
    this.setState((state, props)=>{
      return {count: state.count = val}
    });
  }

  render(){
    return (
      <div className="App">
        Some app
        <div className="test">
          more app
        </div>
        <AlertButton></AlertButton>
      </div>
    );}  
  }

  
  


class AlertButton extends React.Component{
  constructor(props){
    super(props);
    this.buttonref = React.createRef();
    this.state = {clicks: 0}

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    this.setState((state, props) =>{
      return {clicks: state.clicks + 1}
    });
    alert("clicks: " + this.state.clicks)

  }

  render(){
    return (
      <Button className="Primary"
      onClick={this.handleClick}>
        Some button
      </Button>
    );
  }
  
}

export default App;
