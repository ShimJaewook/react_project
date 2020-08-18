import React, { Component } from 'react';
import { Button, Icon, Image, Item, Label, Divider, Header } from 'semantic-ui-react';
import './ItemDetailView.css';
import ItemStore from '../store/MainImageStore';

class ItemDetailView extends Component {
    
    render() {
        const {item} = this.props;
    
        return (
            <div className="detail-content">
                <img className="detail-image" src = {item.detailUrl} />
            </div> 
            // <div id="detail-container">
            //     <Header className="detail-title" as="h2">
            //         상품 세부정보
            //     </Header>
            //     <p className="detail-title">
            //     </p>
            //     <Divider />
            //     <Item.Group>
            //         <Item>
            //             <Image className="detail-image" src={item.imgUrl} />

            //             <Item.Content className="detail-content">
            //                 <Item.Header as='h2'>{item.name}</Item.Header>
            //                 <br /><br />
            //                 <Item.Meta>
            //                 <span className='cinema'>{item.price}</span>
            //                 </Item.Meta>
            //                 <br />
            //                 <Item.Description className="item-description">{item.description}</Item.Description>
            //                 <br />
            //                 <Item.Extra className="item-extra">
            //                 <Label className="hash-tag">#{item.category}</Label>
            //                 </Item.Extra>
            //             </Item.Content>
            //         </Item>
            //     </Item.Group>
            // </div>
        )
    }
}


export default ItemDetailView
