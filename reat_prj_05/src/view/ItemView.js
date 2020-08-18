import React, { Component } from "react"

class ItemView extends Component {
  render() {
    const { item } = this.props
    return (
      <div className="img_wrap">
        <img className="sub_imgs" src={item.imgUrl} width="200px" height="200px" />
      </div>
    )
  }
}

export default ItemView
