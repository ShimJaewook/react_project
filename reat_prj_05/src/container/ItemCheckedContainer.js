import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import ItemAllListView from "../view/ItemAllListView";
import CheckedView from "../view/CheckedView";
// import Selected_item from "../view/Selected_item";
import "./Selected_item.css";

@inject("ItemStore")
@observer
class ItemCheckedContainer extends Component {
  onFilterItem = (e) => {
    this.props.ItemStore.filterItem(e);
  };

  onAddItem = (e) => {
    this.props.ItemStore.addItem(e);
  };

  onAdd_SelectedItem = (target) => {
    this.props.ItemStore.add_SelectedItem(target);
  };

  render() {
    const { item } = this.props.ItemStore;

    return (
      <div className="mainList">
        <div className="check_">
          <div className="item_label">아이템 선택하기</div>
          <CheckedView
            value="food"
            filterItem={this.onFilterItem}
            addItem={this.onAddItem}
          />
          <CheckedView
            value="bath"
            filterItem={this.onFilterItem}
            addItem={this.onAddItem}
          />
          <CheckedView
            value="accessary"
            filterItem={this.onFilterItem}
            addItem={this.onAddItem}
          />
          <CheckedView
            value="clothes"
            filterItem={this.onFilterItem}
            addItem={this.onAddItem}
          />
          <CheckedView
            value="toy"
            filterItem={this.onFilterItem}
            addItem={this.onAddItem}
          />
        </div>

        <div className="ItemAllListView">
          <ItemAllListView
            ItemList={item}
            onAdd_SelectedItem={this.onAdd_SelectedItem}
          />
        </div>
      </div>
    );
  }
}

export default ItemCheckedContainer;
