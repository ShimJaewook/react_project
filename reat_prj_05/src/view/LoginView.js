import React, { Component } from 'react';
import { Form, Button, Input } from "semantic-ui-react";
import "./LoginView.css";
class LoginView extends Component {
    
    state = {visible1: true,
            visible2: true};

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
            <>
            {console.log(rootUser)}
            {this.state.visible1 &&
                <Button onClick = {this.changeView}>로그인</Button>
            }
            
            {!this.state.visible1 && this.state.visible2 && <div>
                <div>
                <Input type="text" id="userid" placeholder='아이디' />
                <br />
                <br />
                <Input type="password" id="password"  placeholder='비밀번호' />  
            </div>
         
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
        </div>}
            
        {!this.state.visible2 && <div> 박민재님 안녕하세요!
        </div>}
        </>
        );
    }
}

export default LoginView;