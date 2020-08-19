import React, { Component } from "react";
import { toJS } from "mobx";
import ItemView_no_btn from "./ItemView_no_btn";
import "./Selected_itemView.scss";

class Selected_itemView extends Component {
  // state = { total_price: 0 };

  render() {
    const selectItems = this.props;
    const onCalculate = this.props;
    const total_price = this.props;

    const items = toJS(selectItems).selectItems;

    return (
      <div class="sp_cart_wrap">
        <div>
          <h1>장바구니</h1>
        </div>
        <div className="sp_cart">
          <div>
            {items.map((item) => {
              return <ItemView_no_btn item={item} onCalculate={onCalculate} />;
            })}
          </div>

          <div>
            <span>총 결제 금액 : {total_price.total_price}</span>
            <button>결제하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Selected_itemView;
