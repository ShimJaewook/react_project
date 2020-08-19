import React, { Component } from "react";
import { Form, Button, Input, Modal, Header, Image } from "semantic-ui-react";
import "./LoginView.css";
import "./LoginView.scss";
import "./DIY_item";
class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      visible1: true,
      visible2: true,
    };
  }

  changeView = (e) => {
    if (this.state.visible1) this.setState({ visible1: !this.state.visible1 });
    else if (this.state.visible1 === false)
      this.setState({ visible2: !this.state.visible2 });
  };

  scrollView = (e) => {
    const menuHeight = document.querySelector(".header_menu");
    if (e.value === document.getElementById("menu-01").value) {
      const location = document.querySelector("#menu-01").offsetTop; //해당 id를 갖는 요소의 top 위치(마진 값까지 포함)를 가져올 수 있다.
      window.scrollTo({
        //직접 태그의 위치로 스크롤이동
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
    if (e.value === document.getElementById("menu-02").value) {
      const location = document.querySelector("#sub_img id").offsetTop; //해당 id를 갖는 요소의 top 위치(마진 값까지 포함)를 가져올 수 있다.
      window.scrollTo({
        //직접 태그의 위치로 스크롤이동
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
    if (e.value === document.getElementById("menu-03").value) {
      const location = document.querySelector("#menu-03").offsetTop; //해당 id를 갖는 요소의 top 위치(마진 값까지 포함)를 가져올 수 있다.
      window.scrollTo({
        //직접 태그의 위치로 스크롤이동
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
    if (e.value === document.getElementById("menu-04").value) {
      const location = document.querySelector("#menu-04").offsetTop; //해당 id를 갖는 요소의 top 위치(마진 값까지 포함)를 가져올 수 있다.
      window.scrollTo({
        //직접 태그의 위치로 smooth하게 스크롤이동
        top: location - menuHeight,
        behavior: "smooth",
      });
    }
  };

  render() {
    const users = this.props.users;

    const rootUser = {
      id: users[0].id,
      pw: users[0].password,
    };

    return (
      <div className="top-header">
        <div></div>
        <div class="header_content">
          <div class="header_menu">
            <div className="logo">
              <img src="/logo_image/LOGO.png" />
              <a href="#">
                <h1> 멍토피아</h1>
              </a>
            </div>
            <ul class="liMenu">
              <li>
                <a
                  href="#"
                  id="menu-02"
                  onClick={() => this.props.changeState("home")}
                >
                  <span>메인으로</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => this.props.changeState("home")}
                  href="#subscription item id"
                  id="menu-01"
                >
                  <span>구독상품</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  id="menu-03"
                  onClick={() => this.props.changeState("allItem")}
                >
                  <span>나만의 구독상품</span>
                </a>
              </li>
              <li>
                <a href="#" id="menu-04">
                  <span>상단으로</span>
                </a>
              </li>
              <li>
                <Modal
                  className="login-modal"
                  onClose={() => this.setState({ open: false })}
                  onOpen={() => this.setState({ open: true })}
                  open={this.state.open}
                  trigger={
                    <a href="#" id="login-modal id">
                      <span>로그인</span>
                    </a>
                  }
                >
                  <Modal.Header>로그인 팝업띄우기</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <div id="modal input id">
                        <Input type="text" id="userid" placeholder="아이디" />
                        <br></br>
                        <br></br>
                        <Input
                          type="password"
                          id="password"
                          placeholder="비밀번호"
                        />
                        <br></br>
                      </div>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button
                      id="modal btn id"
                      onClick={(id) => {
                        if (
                          rootUser.id !==
                          document.getElementById("userid").value
                        ) {
                          alert("아이디가 틀렸습니다.");
                        } else if (
                          rootUser.pw !==
                          document.getElementById("password").value
                        ) {
                          alert("비밀번호가 틀렸습니다");
                        }

                        if (
                          rootUser.pw ===
                            document.getElementById("password").value &&
                          rootUser.id ===
                            document.getElementById("userid").value
                        ) {
                          this.changeView();
                          alert("로그인 되었습니다!");
                          this.setState({ open: false });
                        }
                      }}
                    >
                      로그인
                    </Button>
                  </Modal.Actions>
                </Modal>
              </li>
            </ul>
          </div>

          {!this.state.visible2 && (
            <div className="welcome"> 박민재님 안녕하세요!</div>
          )}
        </div>
      </div>
    );
  }
}

export default LoginView;
