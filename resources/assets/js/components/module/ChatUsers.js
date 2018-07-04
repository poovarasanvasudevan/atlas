import React, {Component} from 'react'
import axios from 'axios'
import Avatar, {AvatarItem} from '@atlaskit/avatar'

export default class ChatUsers extends Component<*, *> {


  constructor() {
    super()

    this.state = {
      users: [
       ]
    }
  }

  componentDidMount() {
    console.log('Mounted')
    axios.get("https://reqres.in/api/users")
      .then(response => {
        console.log(response)
        const users = response.data.data
        this.setState({users})

      })
  }

  render() {

    return (
      <div>
        {this.state.users.map(user => (
          <AvatarItem
            avatar={<Avatar presence="online" src={user.avatar}/>}
            key={user.id}
            onClick={console.log}
            primaryText={user.first_name + " " + user.last_name}
            secondaryText={user.last_name}
          />
        ))}
      </div>
    )
  }
}

