import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ItemListView from "../view/ItemListView";

@inject("ItemStore")
@observer
class ItemListContainer extends Component {

<<<<<<< HEAD
  render() { 
    const { items } = this.props.ItemStore;

    return (
      <div>
        <ItemListView ItemList={items}/>
=======
  render() {
    const { items, value } = this.props.ItemStore;

    return (
      <div>
        <ItemListView ItemList={items} value={value} />
>>>>>>> 3d3d5cd5459ffd00e4d46c7851e91fe67449eaa9
      </div>
    );
  }
}

export default ItemListContainer;
