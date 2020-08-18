import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './ItemDetailView.css';

class ItemDetailView extends Component {
    
    render() {
        const {item} = this.props;
        return (
            <div id="detail-container">
                <Grid>
                    <Grid.Column width={8}>
                        <Image className="detail-image" src={item.imgUrl} />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        HELLO!
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default ItemDetailView;
