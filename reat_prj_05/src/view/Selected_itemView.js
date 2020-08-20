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
        <div className='title'>
        <h1> 장바구니 내역</h1></div>
        <div className='sp_content'>


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
        <div className='payment'>
          <span><h1><b>총 결제 금액 :</b> {this.props.total_price} 원</h1></span>
          <button class='btn' onClick={() => onLoginCheck(total_price)}> <h3>결제하기</h3></button>
        </div>
        </div>

      </div>
    )
  }
}

export default Selected_itemView
