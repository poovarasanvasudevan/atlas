import axios from "axios"

class UserService {

  getAllUsers(callback) {
    axios.get("/api/users")
      .then(response => callback({users: response.data.data}))
  }

  getIssueCardWidget(callback) {
    axios.get('https://bitbucket.org/atlassian/atlaskit-mk-2/raw/f90a4b324477edfb48ac17b5789f4f3a62bff485/packages/media/media-card/examples/app-card/bitbucket-pull-request1.json')
      .then(response => callback(this.convert(response.data)))
  }

  convert(json: any): AppCardModel {
    return json
  }
}

const userService = new UserService
export default userService
