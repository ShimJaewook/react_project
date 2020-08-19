import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Selected_itemView from "../view/Selected_itemView";
import "./Selected_item.css";

@inject("ItemStore")
@observer
class Selected_item_Container extends Component {
  onCalculate = (price) => {
    const { total_price } = this.props.ItemStore;
    this.setState({ total_price: price });
    console.log(total_price, price);
  };

  render() {
    const { selectItems, total_price } = this.props.ItemStore;

    return (
      <div id="selected_items">
        <Selected_itemView
          selectItems={selectItems}
          total_price={total_price}
          onCalculate={this.onCalculate}
        />
      </div>
    );
  }
}

export default Selected_item_Container;
