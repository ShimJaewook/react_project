import React, { Component } from "react";
import { Item } from "semantic-ui-react";

class ItemView extends Component {
<<<<<<< HEAD
    render() {
        const { item } = this.props;
        return (
            <div>
                <Item>
                    <Item.Image size="small" src={item.imgUrl} />
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
            </div>
        )
    }
=======
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className>
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
        </div>
      </div>
    );
  }
>>>>>>> 294df451ff11459bff77da413f5a8c9230afc081
}

export default ItemView;
