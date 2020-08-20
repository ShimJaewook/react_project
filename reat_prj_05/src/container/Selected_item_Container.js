import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import Selected_itemView from "../view/Selected_itemView"
import "./Selected_item.css"

@inject("ItemStore", "UserStore")
@observer
class Selected_item_Container extends Component {
  onLoginCheck = (e) => {
    this.props.UserStore.loginCheck(e)
  }

  onAddPrice = (price) => {
    this.props.ItemStore.addPrice(price)
  }
  onReducePrice = (price) => {
    this.props.ItemStore.reducePrice(price)
  }
  onRemoveItem = (id) => {
    this.props.ItemStore.removeItem(id)
  }

  render() {
    const { selectItems, total_price } = this.props.ItemStore
    return (
      <div id="selected_items">
        <Selected_itemView
          selectItems={selectItems}
          onAddPrice={this.onAddPrice}
          onReducePrice={this.onReducePrice}
          onRemoveItem={this.onRemoveItem}
          onLoginCheck={this.onLoginCheck}
          total_price={total_price}
        />
      </div>
    )
  }
}

export default Selected_item_Container
