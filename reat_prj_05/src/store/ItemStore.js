import { observable, action, toJS } from "mobx"
import Items from "../item_data"

class ItemStore {
  @observable
  items = Items

  @observable
  item = Items

  @observable
  label = "all"

  @observable
  selectItems = []

  @observable
  total_price = 0

  @action
  filterItem(value) {
    this.item = this.item.filter((element) => element.category !== value)
  }

  @action
  selectItem(label) {
    this.item = this.items.filter((ele) => ele.category === label)
  }

  @action
  addItem(value) {
    const item = Items.filter((element) => element.category === value)
    this.item = this.item.concat(item)
  }

  @action
  add_SelectedItem(ele) {
    if (this.selectItems.indexOf(ele) == -1) {
      this.selectItems = this.selectItems.concat(ele)
      this.total_price = this.total_price + ele.price
      ele.quantity = 1
    }

    // this.selectItems = toJS(this.selectItems);
    //toJS로 Json 형태로 파싱해오기
  }

  @action
  addPrice(e) {
    this.total_price = this.total_price + e.price
    e.quantity = e.quantity + 1
  }

  @action
  reducePrice(e) {
    this.total_price = this.total_price - e.price
    e.quantity = e.quantity - 1
  }

  @action
  removeItem(e) {
    this.selectItems = this.selectItems.filter((element) => element.id !== e.id)
    // const index = this.selectItems.findIndex((element) => element.id === id)
    // console.log(index)
    // console.log(this.selectItems.length)
    // this.selectItems = [
    //   ...this.selectItems.slice(0, index),
    //   ...this.selectItems.slice(index + 1, this.selectItems.length),
    // ]
  }
}
export default new ItemStore()
