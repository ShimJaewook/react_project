import { observable, action, toJS } from "mobx";
import Items from "../item_data";

class ItemStore {
  @observable
  items = Items;

  @observable
  item = Items;

  @observable
  label = "all";

  @observable
  selectItems = [];

  @observable
  total_price = 0;

  @action
  filterItem(value) {
    this.item = this.item.filter((element) => element.category !== value);
  }

  @action
  selectItem(label) {
    this.item = this.items.filter((ele) => ele.category === label);
  }

  @action
  addItem(value) {
    const item = Items.filter((element) => element.category === value);
    this.item = this.item.concat(item);
  }

  @action
  add_SelectedItem(ele) {
    if (this.selectItems.indexOf(ele) == -1) {
      this.selectItems = this.selectItems.concat(ele);
      this.addPrice(ele.price);
    }

    // this.selectItems = toJS(this.selectItems);
    //toJS로 Json 형태로 파싱해오기
  }

  @action
  addPrice(p) {
    this.total_price = this.total_price + p;
  }

  @action
  reducePrice(p) {
    this.total_price = this.total_price - p;
  }

  @action
  removeItem(id) {
    this.selectItems = this.selectItems.filter((element) => element.id !== id);
  }
}
export default new ItemStore();
