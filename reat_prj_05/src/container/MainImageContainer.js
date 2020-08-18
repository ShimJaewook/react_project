import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import MainImageView from "../view/MainImageView"

@inject("MainImageStore")
@observer
class MainImageContainer extends Component {
  render() {
    const { mainImages } = this.props.MainImageStore
    return <MainImageView imageList={mainImages} />
  }
}

export default MainImageContainer
