import React, {Component} from 'react'
import MainWidgets from "../module/MainWidgets"

export default class StartPage extends Component<*, *> {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h3>Main heading</h3>
        <p>
          Lorem ipsum dolor sit amet and consectetur adipisicing elit.
          Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
          commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
          possimus labore! Mollitia est quis minima asperiores.
        </p>

        <MainWidgets/>
      </div>
    )
  }
}
