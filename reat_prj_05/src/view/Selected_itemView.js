import React, { Component } from "react"
import { toJS } from "mobx"
import ItemView_no_btn from "./ItemView_no_btn"
import "./Selected_itemView.scss"

class Selected_itemView extends Component {
  render() {
    const selectItems = this.props
    const { onAddPrice, onReducePrice, onRemoveItem } = this.props
    const items = toJS(selectItems).selectItems
    //onRemoveItem={onRemoveItem}
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
          <button>결제하기</button>
        </div>
      </div>
    )
  }
}

export default Selected_itemView

// import React, { Component } from "react";
// import { toJS } from "mobx";
// import ItemView_no_btn from "./ItemView_no_btn";
// import "./Selected_itemView.scss";

// class Selected_itemView extends Component {
//   render() {
//     const selectItems = this.props;
//     const items = toJS(selectItems).selectItems;
//     let total_price = 0;

//     return (
//       <div className="sp_cart">
//         {items.map((item) => {
//           total_price += item.price * 1;
//           return <ItemView_no_btn item={item} />;
//         })}
//         <div>
//           <span>총 결제 금액 : {total_price}</span>
//           <button>결제하기</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Selected_itemView;
