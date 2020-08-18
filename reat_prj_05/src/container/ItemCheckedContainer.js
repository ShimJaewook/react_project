import React, { Component } from "react"
import { Checkbox } from "semantic-ui-react"
import { Grid } from "semantic-ui-react"
import { inject, observer } from "mobx-react"
import ItemAllListView from "../view/ItemAllListView"
import CheckedView from "../view/CheckedView"

@inject("ItemStore")
@observer
class ItemCheckedContainer extends Component {
  onFilterItem = (e) => {
    this.props.ItemStore.filterItem(e)
  }

  onAddItem = (e) => {
    this.props.ItemStore.addItem(e)
  }

  render() {
    const { item } = this.props.ItemStore

    return (
      <Grid>
        <Grid.Column width={2}>
          <CheckedView value="food" filterItem={this.onFilterItem} addItem={this.onAddItem} />
          <CheckedView value="bath" filterItem={this.onFilterItem} addItem={this.onAddItem} />
          <CheckedView value="accessary" filterItem={this.onFilterItem} addItem={this.onAddItem} />
          <CheckedView value="clothes" filterItem={this.onFilterItem} addItem={this.onAddItem} />
          <CheckedView value="toy" filterItem={this.onFilterItem} addItem={this.onAddItem} />
        </Grid.Column>
        <Grid.Column width={8}>
          <ItemAllListView ItemList={item} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default ItemCheckedContainer
