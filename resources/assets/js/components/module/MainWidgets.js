import {Component} from "react"
import UserService from "../service/UserService"
import React from "react"
import {AppCardView} from "@atlaskit/media-card/dist/es2015/app_2/AppCardViewV2/index"

export default class MainWidgets extends Component<*, *> {

  constructor() {
    super()
    this.state = {
      issuecard: {
        isOpen: false,
        data: []
      }
    }
  }

  componentDidMount() {
    UserService.getIssueCardWidget((card) => {
      this.setState({issuecard: {isOpen: true, data: card}})
    })
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        {this.state.issuecard.isOpen ?
          <div>
            <AppCardView newDesign={false} model={this.state.issuecard.data} />
          </div>
          : null
        }
      </div>
    )
  }
}
