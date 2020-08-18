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
    console.log(toJS(this.props.ItemStore.selectItems));
  };

  render() {
    const { item, selectItems } = this.props.ItemStore;

    return (
      <div>
        <Grid>
          <Grid.Column width={2}>
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
          </Grid.Column>
          <Grid.Column width={8}>
            <ItemAllListView
              ItemList={item}
              onAdd_SelectedItem={this.onAdd_SelectedItem}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ItemCheckedContainer;
