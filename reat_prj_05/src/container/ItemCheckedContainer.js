import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import ItemAllListView from "../view/ItemAllListView";

@inject("ItemStore")
@observer
class ItemCheckedContainer extends Component {
  onSelectItem = (e) => {
    const label = this.props.ItemStore.label;
    const value = e.target.value;

    this.setState({ label: value });
    console.log("this.state.label=", label, "value=", value);

    console.log(label);
    this.props.ItemStore.selectItem(label);
    console.log(this.props.ItemStore.items[1].category == label);

    console.log(this.props.ItemStore.item.length);
  };

  render() {
    const { item } = this.props.ItemStore;

    return (
      <Grid>
        <Grid.Column width={2}>
          <input
            type="radio"
            label="간식"
            // checked={this.state.checkedA}
            value="food"
            onClick={this.onSelectItem}
          ></input>
        </Grid.Column>
        <Grid.Column width={8}>
          <ItemAllListView ItemList={item} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default ItemCheckedContainer;
