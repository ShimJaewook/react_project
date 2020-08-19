import React, { Component } from "react";
import "./ItemView.css";
import "./Selected_itemView.scss";

class ItemView_no_btn extends Component {
  state = { quantity: 1 };

  onAdd = (price) => {
    this.setState({ quantity: this.state.quantity + 1 });
    // this.setState({ total_price: this.state.total_price + price });
  };

  onDelete = () => {
    if (this.state.quantity < 0) {
      {
        this.setState({ quantity: 1 });
      }
    }
    this.setState({ quantity: this.state.quantity - 1 });
  };

  render() {
    const { item } = this.props;
    const price = item.price * this.state.quantity;

    return (
      <div className="cart_wrap">
        <img
          className="cart_imgs"
          src={item.imgUrl}
          width="200px"
          height="200px"
          onMouseEnter={() => this.setState({ mouse: !this.state.mouse })}
        />
        <div className="cart_info">
          <span>
            <h2>{item.name}</h2>
            <h3>가격: {price}</h3>
            <h3>수량: </h3>
            <button onClick={this.onDelete}>-</button>
            {this.state.quantity}
            <button onClick={() => this.onAdd(price)}>+</button>
          </span>
        </div>
      </div>
    );
  }
}

export default ItemView_no_btn;
