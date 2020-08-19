import React, {Component} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


class LoginModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
      }
      
    state = 
    {visible1: true,
    visible2: true
    };

changeView = (e) => {
    if(this.state.visible1) 
        this.setState({visible1: !this.state.visible1});
    else if(this.state.visible1===false)
        this.setState({visible2: !this.state.visible2});
};

    
    render() {
        const users = this.props.users;
     
         const rootUser = {
            id: users[0].id,
            pw:users[0].password,
            }
    return (

   <Modal
   onClose={() => this.setState({ open: false })}
   onOpen={() => this.setState({ open: true })}
   open={this.state.open}
   trigger={<Button className="btn">로그인</Button>}>

      <Modal.Header>로그인 팝업띄우기</Modal.Header>
      <Modal.Content>
          <div>
                <Input type="text" id="userid" placeholder='아이디' />
                &nbsp;&nbsp;
                <Input type="password" id="password"  placeholder='비밀번호' />  
                &nbsp;&nbsp;
          </div> 
       
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      <Button id="btn" onClick={(id,)=>{ 
            if(rootUser.id !== document.getElementById("userid").value) {
                      alert('아이디가 틀렸습니다.');
                  }
            
                if(rootUser.pw !== document.getElementById("password").value){
                    alert('비밀번호가 틀렸습니다');
               
                }
                 
            
            
            if(rootUser.pw===document.getElementById("password").value
                 && rootUser.id===document.getElementById("userid").value){
                    this.changeView();
                    alert('로그인 되었습니다!');
                    
                    
            }}
        }>로그인
        </Button>

      </Modal.Actions>
    </Modal>
  
  )
}
}

export default LoginModalView;