import React, { Component } from "react";
import ItemDetailView from "./ItemDetailView";
import Popup from "reactjs-popup";
import "./ItemView.css";
import "./Selected_itemView.scss";

class ItemView_no_btn extends Component {
  state = { quantity: 1 };

  onAddPrice = (e) => {
    this.setState({ quantity: this.state.quantity + 1 });
    this.props.onAddPrice(e);
  };

  onDelete = (e) => {
    if (this.state.quantity == 1) {
      this.props.onRemoveItem(e.id);
    }
    this.setState({ quantity: this.state.quantity - 1 });
    this.props.onReducePrice(e.price);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="cart_wrap">
        <img
          className="cart_imgs"
          src={item.imgUrl}
          width="200px"
          height="200px"
        />
        <div className="cart_info">
          <span>
            <h2>{item.name}</h2>
            <h3>가격: {item.price}</h3>
            <h3>수량: </h3>
            <button onClick={() => this.onDelete(item)}>-</button>
            {console.log(this.state.quantity)}
            {this.state.quantity}
            <button onClick={() => this.onAddPrice(item.price)}>+</button>
            {/* <button onClick={() => this.props.onAddPrice(item.price)}>+</button> */}
          </span>
        </div>
      </div>
    );
  }
}

export default ItemView_no_btn;
