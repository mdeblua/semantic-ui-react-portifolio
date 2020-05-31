import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Header, Icon, List } from 'semantic-ui-react'

class App extends Component {

  state = {
    values: []
  }
  componentDidMount() {

    axios.get("http://localhost:5000/values")
      .then((response) => {
        this.setState({
          values: response.data
        })
      })

  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Atividades</Header.Content>
        </Header>

        <List>
          {this.state.values.map((val: any) => (
            <List.Item key={val.id}>{val.name}</List.Item>
          ))}
        </List>

        {/* <ul>
          {this.state.values.map((val: any) => (
            <li key={val.id} >{val.name}</li>
          ))}
        </ul> */}

      </div>
    );
  }
}

export default App;
