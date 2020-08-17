import React, { Component } from 'react'
import ItemView from './ItemView';

class ItemAllListView extends Component {

    render() {
        const itemList = this.props.ItemList.map((item) => {
            return (
                <ItemView item={item} />
            )
        });
        return (
            itemList
        )
    }
}

export default ItemAllListView
