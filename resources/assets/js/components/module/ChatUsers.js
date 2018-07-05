import React, {Component} from 'react'
import UserService from '../service/UserService'
import Avatar, {AvatarItem} from '@atlaskit/avatar'
import {Box} from "reflexbox"
import {MentionItem, MentionList} from "@atlaskit/mention/dist/es5/index"

export default class ChatUsers extends Component<*, *> {

  props = {}

  constructor(props) {
    super()

    this.state = {
      users: []
    }
    this.props = props
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

  onUserSelect = (user) => {
    this.props.onUserSelected(user)
  }

  render() {

    return (
      <Box auto={true} p={2} className="sidebar borderLeft scroll1">
        <div style={{direction: 'ltr'}}>
          {this.state.users.map(user => (
            <AvatarItem
              avatar={<Avatar presence={user.presence.status} src={user.avatarUrl}/>}
              key={user.id}
              onClick={this.onUserSelect}
              userdata={user}
              primaryText={user.name}
              secondaryText={'@' + user.nickname}
            />
          ))}
        </div>
      </Box>
    )
  }
}

