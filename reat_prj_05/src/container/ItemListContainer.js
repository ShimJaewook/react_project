import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemListView from "../view/ItemListView";

@inject("ItemStore")
@observer
class ItemListContainer extends Component {
  render() {
    const { ItemList } = this.props.ItemStore.ItemList;

    return (
      <div>
        <ItemListView ItemList={ItemList} />
      </div>
    );
  }
}

export default ItemListContainer;
