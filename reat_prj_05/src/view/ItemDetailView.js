import React, { Component } from 'react'

class ItemDetailView extends Component {
    
    render() {
        const {item} = this.props;
        return (
            <div>
                <img src={item.imgUrl} />
            </div>
        )
    }
}

export default ItemDetailView;
