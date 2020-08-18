import React, { Component } from "react";

class ItemDetailView extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="detail" width="800px">
        <img src={item.imgUrl} />
      </div>
    );
  }
}

export default ItemDetailView;
