import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemListView from "../view/ItemListView";
import DIY_item from "../view/DIY_item";

@inject("ItemStore")
@observer
class ItemListContainer extends Component {
  //클릭함수 구현

  render() {
    const { items } = this.props.ItemStore;

    return (
      <div>
        <ItemListView ItemList={items} item_class="A" />
        <ItemListView ItemList={items} item_class="B" />
        <ItemListView ItemList={items} item_class="C" />
        <DIY_item />
      </div>
    );
  }
}

export default ItemListContainer;
