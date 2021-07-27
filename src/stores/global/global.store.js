import { computed,action, toJS, makeObservable, observable } from "mobx";

export class GlobalStore {
  @observable text = "Hello";
  constructor() {
    makeObservable(this);
  }
}

export const globalStore = new GlobalStore();
