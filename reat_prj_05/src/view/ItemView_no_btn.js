import React, { Component } from "react"
import "./ItemView.css"
import "./Selected_itemView.scss"

class ItemView_no_btn extends Component {
  onAddPrice = (e) => {
    this.props.onAddPrice(e)
  }

  onDelete = (e) => {
    if (this.props.item.quantity == 1) {
      this.props.onRemoveItem(e)
    }
    this.props.onReducePrice(e)
  }

  render() {
    const { item } = this.props
    return (
      <div className="cart_wrap">
        <img className="cart_imgs" src={item.imgUrl} width="200px" height="200px" />
        <div className="cart_info">
          <span>
            <h2 className='itme_title'>{item.name}</h2>
            <h3>가격: {item.price}</h3>
            <h3>수량: </h3>
            <button onClick={() => this.onDelete(item)}>-</button>
            {item.quantity}
            <button onClick={() => this.onAddPrice(item)}>+</button>
          </span>
        </div>
      </div>
    )
  }
}

export default ItemView_no_btn
