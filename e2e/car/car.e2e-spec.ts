import { CarPage } from './car.po';
import { element, by } from 'protractor';

describe('Cars page', () => {
  let page: CarPage;

  beforeEach(() => {
    page = new CarPage();
  });

  it('Should not load addForm', () => {
    page.navigateTo();
    expect(page.getForm()).toBeFalsy('AddForm not loaded before click button "Add new car".');
    element(by.buttonText('Add new car')).click();
    expect(page.getForm()).toBeTruthy('AddForm is apear after click button "Add new car".')
  });
  
});
