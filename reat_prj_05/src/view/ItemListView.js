import React, { Component } from "react";
import ItemView from "./ItemView";
import "./ItemView.css";

class ItemListView extends Component {
  state = { visible: true };

  handleShow = (e) => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const item_class = this.props.item_class;
    // console.log(item_class);

    const filtered = this.props.ItemList.filter(
      (Item) => Item.class === item_class
    );
    const ItemList = filtered.map((item) => {
      return <ItemView key={item.imgUrl} item={item} />;
    });

    return (
      <div>
        <div className="sub_img" onClick={this.handleShow}>
          <h1>Subscription Item {item_class}</h1>
        </div>
        <div className={this.state.visible == true ? "show" : "hide"}>
          <div className="sub_wrap">{ItemList}</div>
        </div>
      </div>
    );
  }
}

export default ItemListView;
