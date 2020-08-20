import React, { Component } from "react"
import LoginView from "../view/LoginView"
import { inject, observer } from "mobx-react"

@inject("UserStore", "StateStore", "ItemStore")
@observer
class LoginContainer extends Component {
  onChangeLogin = () => {
    this.props.UserStore.changeLogin();
  }

  changeState = (state) => {
    this.props.StateStore.setState(state)
  }

  render() {
    const { users } = this.props.UserStore
    return (
      <div>
        <LoginView
          users={users}
          changeState={this.changeState}
          onChangeLogin={this.onChangeLogin}
        />
      </div>
    )
  }
}
export default LoginContainer
