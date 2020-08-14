import {observable, action} from "mobx";
import Items from "../item_data";

class ItemStore {
    @observable
    items = Items;

    @observable
    item = {};



}
export default new ItemStore();