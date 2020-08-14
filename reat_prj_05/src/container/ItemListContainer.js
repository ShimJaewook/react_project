import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemListView from "../view/ItemListView";

@inject("ItemStore")
@observer
class ItemListContainer extends Component {

  render() { 
    const { items } = this.props.ItemStore;

    return (
      <div>
        <ItemListView ItemList={items}/>
      </div>
    );
  }
}

export default ItemListContainer;
