import React, { Component } from "react";

import { inject, observer } from "mobx-react";

import Selected_itemView from "../view/Selected_itemView";
import "./Selected_item.css";

@observer
@inject("ItemStore")
@observer
class Selected_item_Container extends Component {
  render() {
    const { selectItems } = this.props.ItemStore;
    return (
      <div id="selected_items">
        <Selected_itemView selectItems={selectItems} />
      </div>
    );
  }
}

export default Selected_item_Container;
