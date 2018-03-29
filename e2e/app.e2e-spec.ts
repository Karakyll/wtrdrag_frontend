import { AppPage } from './app.po';

describe('App main page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load Navbar', () => {
    page.navigateTo();
    expect(page.getNavbar()).toBeTruthy('Navebar is apear.');
  });
  
});
