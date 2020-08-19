import React, { Component } from 'react';
import {Grid, Header} from 'semantic-ui-react';
import './MiddleContentView.scss';

class MiddleContentView extends Component {

    render() {
        return (
                <Grid className="middle-container">
                    <Grid.Row columns={1}>
                        <div className="middle-title">선택형 정기 배송만의 3가지 특징</div>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <div className="middle-content">
                                <h2 className="middle-header">거품 없는 가격으로 걱정 없이!</h2>
                                <p className="middle-body">각 분야 전문수의사들의 연구를 통해 제작된 용품과 간식은 물론 동물병원 납품되는 제품들로
                                    꾸려져 <p>약 8만원에 달하는 구성품들을 34,900원에 받아볼 수 있어요.</p>
                                </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="middle-content">
                                <h2 className="middle-header">원하는 용품으로 걱정 없이!</h2>
                                <p className="middle-body">각 분야별 전문 수의사가 제안하는 박스 구성 중 마음에 들지 않는 용품은 
                                <p> 원하는 용품으로 변경할 수 있어요.</p> 약 70개의 용품 중 원하는 용품을 골라담아 우리 아이만의
                                맞춤 박스를 만들 수 있어요.
                                </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="middle-content">
                                <h2 className="middle-header">까다로운 반려견도 걱정 없이!</h2>
                                <p className="middle-body">입맛이 까다롭거나, 특정 재료에 알러지가 있는 반려견을 위한
                                <p>'맞춤식품서비스'를 제공해요.</p> 우리 아이의 입맛과 체질에 맞춘 영양 식품을 걱정 없이
                                받아볼 수 있어요.
                                </p>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}

export default MiddleContentView
