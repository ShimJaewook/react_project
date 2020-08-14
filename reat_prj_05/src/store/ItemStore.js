import item_data from "../item_data";
import { observable } from "mobx";

class ItemStore {
  @observable
  ItemList = item_data;
}

export default new ItemStore();
