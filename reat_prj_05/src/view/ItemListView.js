import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import ItemView from "./ItemView";
import "./ItemView.css";

class ItemListView extends Component {
  render() {
<<<<<<< HEAD
    const ItemList = this.props.ItemList.map((item) => {
      return (
        <ItemView key={item.id} item={item}/>
      );
    });

    // let ItemList_view = ItemList.length;

    // // ItemList.map((val) => {
    // //   return <li>{val}</li>;
    // // });
    const temp = this.props.ItemList.filter((tempItem)=>tempItem.name === "호박 쿠키");
    console.log(temp.price);
    // return <div>{ItemList.length > 0 ? ItemList_view : <li>none</li>} </div>;
=======
    const filtered = this.props.ItemList.filter((Item) => Item.class == "A");

    const ItemList = filtered.map((item) => {
      return <ItemView key={item.imgUrl} item={item} />;
    });

>>>>>>> 294df451ff11459bff77da413f5a8c9230afc081
    return (
      <div>
        <div className="sub_img"></div>
        <div>
          <Item.Group>{ItemList}</Item.Group>
        </div>
      </div>
    );
  }
}

export default ItemListView;
