import React, { Component } from "react";
import ItemDetailView from "./ItemDetailView";
import Popup from "reactjs-popup";
import "./ItemView.css";

class ItemView_no_btn extends Component {
  state = { quantity: 1 };

  onAdd = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  onDelete = () => {
    if (this.state.quantity < 0) {
      {
        this.setState({ quantity: "" });
      }
    }
    this.setState({ quantity: this.state.quantity - 1 });
  };

  render() {
    const { item } = this.props;
    const price = item.price * this.state.quantity;
    return (
      <div className="img_wrap">
        <img
          className="sub_imgs"
          src={item.imgUrl}
          width="200px"
          height="200px"
          onMouseEnter={() => this.setState({ mouse: !this.state.mouse })}
        />
        <div>
          <span>
            <h3>{item.name}</h3>
            <h3>{price}</h3>
            <h3>수량: </h3>
            <button onClick={this.onDelete}>-</button>
            {this.state.quantity}
            <button onClick={this.onAdd}>+</button>
          </span>
        </div>
      </div>
    );
  }
}

export default ItemView_no_btn;
