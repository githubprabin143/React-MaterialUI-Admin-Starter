import {
    observable,
    action,
    computed,
    toJS,
    autorun,
    reaction,
    when,
    observe,
  } from "mobx"; 

  class SessionStore{
    // @observable loading = false;
  }

 export const sessionStore = new SessionStore();
