import React, { Component } from 'react';
import { Form, Button, Input } from "semantic-ui-react";

class LoginView extends Component {
   
    render() {
        let visible = false;
        const {user} = this.props;

        return (
            <>
            {visible &&
                <Button onClick = {() => { 
                    visible = !visible;
                }}>로그인</Button>
            }
            
            {!visible && <div>
                <div>
                <Input type="text" id="userid" placeholder='아이디' />
                <br />
                <br />
                <Input type="password" id="password"  placeholder='비밀번호' />  
            </div>
          <div>
              <Button onClick={(id,password)=>{ 
                  if(this.props.id !== id) {
                      alert('아이디가 틀렸습니다.');
                  }
            
                if(this.props.password !== password){
                    alert('비밀번호가 틀렸습니다');
                }}
            }>로그인
            </Button>
        </div>
        </div>}
        </>
        );
    }
}

export default LoginView;