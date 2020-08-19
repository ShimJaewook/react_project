import React, { Component } from "react";
import ItemView_no_btn from "./ItemView";
import "./ItemView.scss";

class ItemListView extends Component {
  state = { visible: true };

  handleShow = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const item_class = this.props.item_class;
    const filtered = this.props.ItemList.filter(
      (Item) => Item.class === item_class
    );

    // popup trigger item list
    const itemList = filtered.map((item) => {
      return <ItemView_no_btn key={item.id} item={item} />;
    });

    return (
      <div>
        <div className="sub_img" onClick={this.handleShow}>
          <h1>Subscription Item {item_class}</h1>
        </div>
        <div className={this.state.visible === true ? "hide" : "show"}>
          <div className="sub_wrap">{itemList}</div>
        </div>
      </div>
    );
  }
}

export default ItemListView;
