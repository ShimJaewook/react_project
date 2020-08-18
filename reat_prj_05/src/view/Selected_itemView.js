import React, { Component } from "react";
import { toJS } from "mobx";
import ItemView from "./ItemView";
import ItemView_no_btn from "./ItemView_no_btn";

class Selected_itemView extends Component {
  render() {
    const selectItems = this.props;
    const items = toJS(selectItems).selectItems;

    return items.map((item) => {
      return <ItemView_no_btn item={item} />;
    });
  }
}

export default Selected_itemView;
