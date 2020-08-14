import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import ItemView from "./ItemView";
import "./ItemView.css";

class ItemListView extends Component {

  render() {
    let {visible} = this.props

    const filtered = this.props.ItemList.filter((Item) => Item.class == "A");

    const ItemList = filtered.map((item) => {
      return <ItemView key={item.imgUrl} item={item} />;
    });

    return (
      <div>
        <div className="sub_img" onClick={()=>{
          this.setState({
            visible: !this.state.visible,
          })
          console.log(visible);
        }}></div>
        { visible && <div> <Item.Group>{ItemList}</Item.Group>
        </div>}
      </div>
    );
    
  }
}

export default ItemListView;
