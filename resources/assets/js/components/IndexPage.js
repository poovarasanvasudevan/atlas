import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import StartPage from "./pages/StartPage"
import PageModule from "./module/PageModule"
import MailPage from "./pages/MailPage"


export default class IndexPage extends Component<*, *> {

  constructor() {
    super()
  }


  render() {
    return (
      <HashRouter>
        <PageModule>
          <Route exact path="/" component={StartPage}/>
          <Route path="/mail" component={MailPage}/>
        </PageModule>
      </HashRouter>
    )
  }
}
