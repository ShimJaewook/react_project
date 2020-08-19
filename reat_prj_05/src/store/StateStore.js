import React, { Component } from 'react'
import { observable, computed, action } from 'mobx'

class StateStore {
   
    @observable
    state = "home";
    
    @computed
    get getState() {
        return this.state;
    }

    @action 
    setState(state) {
        this.state = state;
    }
}

export default new StateStore()
