import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemListView from "../view/ItemListView";

@inject("ItemStore")
@observer
class ItemListContainer extends Component {
  //클릭함수 구현

  render() {
    const { items } = this.props.ItemStore;

    return (
      <div>
        <div className="sub_img"></div>
        <ItemListView ItemList={items} />
      </div>
    );
  }
}

export default ItemListContainer;
