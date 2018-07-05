import {EventEmitter} from 'events'
import axios from "axios"

class UserService {

  getAllUsers(callback) {
    axios.get("/api/users")
      .then(response => callback({users: response.data.data}))
  }
}

const userService = new UserService
export default userService
