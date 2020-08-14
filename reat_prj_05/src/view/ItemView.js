import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { Grid, Image } from "semantic-ui-react";

class ItemView extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div width="200px">
          <Image src={item.imgUrl} width="200px" height="200px" />
        </div>

        {/* <div className>
          <Item>
            <Item.Image size="tiny" src={item.imgUrl} />
            <Item.Content>
              <Item.Header as="a">{item.name}</Item.Header>
              <Item.Description>
                <p>{item.description}</p>
              </Item.Description>
              <Item.Meta>
                <p>{item.price}</p>
              </Item.Meta>
            </Item.Content>
          </Item>
        </div> */}
      </div>
    );
  }
}

export default ItemView;
