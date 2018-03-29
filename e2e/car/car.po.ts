import { browser, by, element } from 'protractor';

export class CarPage {
    navigateTo() {
      return browser.get('/cars/');
    }
  
    getForm() {
      return element(by.id('addForm')).isPresent();
    }
  }
  