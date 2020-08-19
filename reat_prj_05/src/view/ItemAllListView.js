import React, { Component } from "react"
import ItemView from "./ItemView"

class ItemAllListView extends Component {
  render() {
    const itemList = this.props.ItemList

    return itemList.map((item) => {
      return <ItemView item={item} onAdd_SelectedItem={this.props.onAdd_SelectedItem} />
    })
  }
}

export default ItemAllListView
