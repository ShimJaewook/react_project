import React, { Component } from "react";
import { Item } from "semantic-ui-react";

import ItemView from "./ItemView";
import "./ItemView.css";

class ItemListView extends Component {
<<<<<<< HEAD
=======
  state = { visible: true };

  handleShow = (e) => {
    this.setState({ visible: !this.state.visible });
  };
>>>>>>> 3d3d5cd5459ffd00e4d46c7851e91fe67449eaa9

  render() {
    let {visible} = this.props

    const filtered = this.props.ItemList.filter((Item) => Item.class == "A");
    const ItemList = filtered.map((item) => {
      return <ItemView key={item.imgUrl} item={item} />;
    });

    return (
      <div>
<<<<<<< HEAD
        <div className="sub_img" onClick={()=>{
          this.setState({
            visible: !this.state.visible,
          })
          console.log(visible);
        }}></div>
        { visible && <div> <Item.Group>{ItemList}</Item.Group>
        </div>}
=======
        <div className="sub_img" onClick={this.handleShow}>
          이거에요
        </div>
        <div className={this.state.visible == true ? "show" : "hide"}>
          <Item.Group>{ItemList}</Item.Group>
        </div>
>>>>>>> 3d3d5cd5459ffd00e4d46c7851e91fe67449eaa9
      </div>
    );
    
  }
}

export default ItemListView;
