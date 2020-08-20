import React, { Component } from "react"
import ItemListContainer from "./container/ItemListContainer"
import LoginContainer from "./container/LoginContainer"
import MainImageContainer from "./container/MainImageContainer"
import ItemAllMain from "./view/menu/ItemAllMain"
import Footer from "./view/menu/footer"

import { observer, inject } from "mobx-react"

@inject("StateStore")
@observer
class App extends Component {
  render() {
    const state = this.props.StateStore.getState

    return (
      <div>
        <LoginContainer />

        {state === "home" && <MainImageContainer />}
        {state === "home" && <ItemListContainer />}
        {state === "allItem" && <ItemAllMain />}

        <Footer />
      </div>
    )
  }
}

export default App
