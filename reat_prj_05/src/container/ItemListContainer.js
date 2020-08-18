
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemListView from "../view/ItemListView";

@inject("ItemStore")
@observer
class ItemListContainer extends Component {
  //클릭함수 구현

  render() {
    const { items, value } = this.props.ItemStore;

    return (
      <div>
        <ItemListView ItemList={items} value={value} />
      </div>
    );
  }
}

export default ItemListContainer;