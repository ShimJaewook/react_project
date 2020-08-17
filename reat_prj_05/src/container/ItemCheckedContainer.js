import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import ItemAllListView from '../view/ItemAllListView'

@inject("ItemStore")
@observer
class ItemCheckedContainer extends Component {
    state = {
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true
    }


    onFilterItem = (e, { value }) => {
        switch (value) {
            case 'food':
                if (this.state.checkedA === true) {
                    this.setState({ checkedA: false })
                    this.props.ItemStore.filterItem(value);
                }
                else if (this.state.checkedA !== true) {
                    this.setState({ checkedA: true })
                    this.props.ItemStore.addItem(value);
                }
                break;
            case 'bath':
                if (this.state.checkedB === true) {
                    this.setState({ checkedB: false })
                    this.props.ItemStore.filterItem(value);
                }
                else if (this.state.checkedB !== true) {
                    this.setState({ checkedB: true })
                    this.props.ItemStore.addItem(value);
                }
                break;
            case 'accessary':
                if (this.state.checkedC === true) {
                    this.setState({ checkedC: false })
                    this.props.ItemStore.filterItem(value);
                }
                else if (this.state.checkedC !== true) {
                    this.setState({ checkedC: true })
                    this.props.ItemStore.addItem(value);
                }
                break;
            case 'clothes':
                if (this.state.checkedD === true) {
                    this.setState({ checkedD: false })
                    this.props.ItemStore.filterItem(value);
                }
                else if (this.state.checkedD !== true) {
                    this.setState({ checkedD: true })
                    this.props.ItemStore.addItem(value);
                }
                break;
            case 'toy':
                if (this.state.checkedE === true) {
                    this.setState({ checkedE: false })
                    this.props.ItemStore.filterItem(value);
                }
                else if (this.state.checkeE !== true) {
                    this.setState({ checkedE: true })
                    this.props.ItemStore.addItem(value);
                }
                break;
        }
    };


    render() {

        const { item } = this.props.ItemStore;

        return (
            <Grid>
                <Grid.Column width={2}>
                    <Checkbox label="간식" checked={this.state.checkedA} value="food" onClick={this.onFilterItem} />
                    <Checkbox label="목욕용품" checked={this.state.checkedB} value="bath" defaultChecked onClick={this.onFilterItem} />
                    <Checkbox label="악세서리" checked={this.state.checkedC} value="accessary" defaultChecked onClick={this.onFilterItem} />
                    <Checkbox label="의상" checked={this.state.checkedD} value="clothes" defaultChecked onClick={this.onFilterItem} />
                    <Checkbox label="장난감" checked={this.state.checkedE} value="toy" defaultChecked onClick={this.onFilterItem} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <ItemAllListView ItemList={item} />
                </Grid.Column>
            </Grid >

        )
    }
}

export default ItemCheckedContainer
