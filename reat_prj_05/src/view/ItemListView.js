import React, { Component } from "react";

class ItemListView extends Component {
  render() {
    const ItemList = this.props;

    let ItemList_view = ItemList.length;

    // ItemList.map((val) => {
    //   return <li>{val}</li>;
    // });

    return <div>{ItemList.length > 0 ? ItemList_view : <li>none</li>} </div>;
  }
}

export default ItemListView;
