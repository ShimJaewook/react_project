import React, { Component } from "react"
import { toJS } from "mobx"
import ItemView_no_btn from "./ItemView_no_btn"
import "./Selected_itemView.scss"

class Selected_itemView extends Component {
  render() {
    const selectItems = this.props
    const { onAddPrice, onReducePrice, onRemoveItem, onLoginCheck, total_price } = this.props
    const items = toJS(selectItems).selectItems

    return (
      <div className="sp_cart">
        {items.map((item) => {
          return (
            <ItemView_no_btn
              item={item}
              onAddPrice={onAddPrice}
              onReducePrice={onReducePrice}
              onRemoveItem={onRemoveItem}
            />
          )
        })}
        <div>
          <span>총 결제 금액 : {this.props.total_price}</span>
          <button onClick={() => onLoginCheck(total_price)}>결제하기</button>
        </div>
      </div>
    )
  }
}

export default Selected_itemView
