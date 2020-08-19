import React, { Component } from "react";
import ItemView from "./ItemView";
import "./ItemView.scss";

class ItemAllListView extends Component {
  render() {
    const itemList = this.props.ItemList;
    const onAdd_SelectedItem = this.props.onAdd_SelectedItem;

    return (
      <div className="allItem_wrap">
        {itemList.map((item) => {
          return (
            <ItemView item={item} onAdd_SelectedItem={onAdd_SelectedItem} />
          );
        })}
      </div>
    );
  }
}
export default ItemAllListView;
