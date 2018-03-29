import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbar() {
    return element(by.className('navbar'))
  }
}
