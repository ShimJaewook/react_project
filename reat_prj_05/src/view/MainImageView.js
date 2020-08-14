import React, { Component } from 'react'
// import { Image } from 'semantic-ui-react'
import { Jumbotron, Container } from 'reactstrap';

class MainImageView extends Component {

    render() {
        return (
            // <Image src='/src_images/driving_dog.png' width="100%" height="50px"/>
        
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <img src='/src_images/driving_dog.png' />
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default MainImageView
