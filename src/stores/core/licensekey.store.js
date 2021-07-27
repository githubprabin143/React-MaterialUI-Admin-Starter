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

  class LicenseKeyStore{
    // @observable loading = false;
  }

 export const licenseKeyStore = new LicenseKeyStore();
