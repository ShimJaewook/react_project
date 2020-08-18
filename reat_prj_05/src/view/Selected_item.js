import React, { Component } from "react";
import { toJS } from "mobx";
import ItemView from "./ItemView";

class Selected_item extends Component {
  render() {
    const selectItems = this.props;
    const items = toJS(selectItems).selectItems;
    console.log(items);

    return items.map((item) => {
      return <ItemView item={item} />;
    });
  }
}

export default Selected_item;
