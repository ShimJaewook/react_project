import React, { Component } from 'react';
import { Button, Icon, Image, Item, Label, Divider } from 'semantic-ui-react';
import './ItemDetailView.css';
import ItemStorre from '../store/MainImageStore';

class ItemDetailView extends Component {
    
    render() {
        const {item} = this.props;
        return (
            <div id="detail-container">
                {/* <Divider />
                <Item>
                    <Image className="detail-image" src={item.imgUrl} />

                    <Item.Content>
                        <Item.Header as='a'>12 Years a Slave</Item.Header>
                        <Item.Meta>
                        <span className='cinema'>Union Square 14</span>
                        </Item.Meta>
                        <Item.Description>paragraph</Item.Description>
                        <Item.Extra>
                        <Label>IMAX</Label>
                        <Label icon='globe' content='Additional Languages' />
                        </Item.Extra>
                    </Item.Content>
                </Item> */}
            </div>
        )
    }
}


export default ItemDetailView
