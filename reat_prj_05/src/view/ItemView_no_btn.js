import React, { Component } from "react";
import ItemDetailView from "./ItemDetailView";
import Popup from "reactjs-popup";
import "./ItemView.css";

class ItemView_no_btn extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="img_wrap">
        <img
          className="sub_imgs"
          src={item.imgUrl}
          width="200px"
          height="200px"
          onMouseEnter={() => this.setState({ mouse: !this.state.mouse })}
        />
      </div>
    );
  }
}

export default ItemView_no_btn;
