import React, { Component } from "react";
import "./ItemView.css";

class ItemView extends Component {
  render() {
    const { item, onAdd_SelectedItem } = this.props;
    return (
      <div className="img_wrap">
        <img
          className="sub_imgs"
          src={item.imgUrl}
          width="200px"
          height="200px"
          onClick={() => onAdd_SelectedItem(item)}
        />
      </div>
    );
  }
}

export default ItemView;
