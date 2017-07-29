import React, {Component} from "react";
import {Button} from "antd";
import "./App.css";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props)
    // axios("http://www.baidu.com")
    //   .then(res => {
    //     console.log(res.data);
    //   })
    this.state={ ky: 'he'}
  }

  componentWillMount(){
    console.log('componetWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
