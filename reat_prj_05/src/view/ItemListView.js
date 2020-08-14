import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import ItemView from "./ItemView";

class ItemListView extends Component {
  render() {
    const ItemList = this.props.ItemList.map((item) => {
      return (
        <ItemView key={item.imgUrl} item={item}/>
      );
    });

    // let ItemList_view = ItemList.length;

    // // ItemList.map((val) => {
    // //   return <li>{val}</li>;
    // // });

    // return <div>{ItemList.length > 0 ? ItemList_view : <li>none</li>} </div>;
    return (
      <div>
        <Item.Group>{ItemList}</Item.Group>
      </div>
    )
  }
}

export default ItemListView;
