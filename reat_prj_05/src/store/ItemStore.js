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

  @action
  filterItem(value) {
    this.item = this.item.filter((element) => element.category !== value);
  }

  @action
  changeLabel(value) {
    const label = this.value;
    this.setState({ label: value });
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
    this.selectItems = this.selectItems.concat(ele);
    this.selectItems = toJS(this.selectItems);
    //toJS로 Json 형태로 파싱해오기
  }
}
export default new ItemStore();
