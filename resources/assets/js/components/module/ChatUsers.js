import React, {Component} from 'react'
import UserService from '../service/UserService'
import Avatar, {AvatarItem} from '@atlaskit/avatar'
import {Box} from "reflexbox"

export default class ChatUsers extends Component<*, *> {


  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  handleResize = () => this.setState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  componentDidMount() {
    UserService.getAllUsers((data) => this.setState(data))
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  render() {

    return (
      <Box auto={true} p={2} className="sidebar borderLeft scroll1" style={{height: `${this.state.height - 32}px`}}>
        <div>
          {this.state.users.map(user => (
            <AvatarItem
              avatar={<Avatar presence="online" src={user.avatar}/>}
              key={user.id}
              onClick={console.log}
              primaryText={user.first_name + " " + user.last_name}
              secondaryText={user.email}
            />
          ))}
        </div>
      </Box>
    )
  }
}

