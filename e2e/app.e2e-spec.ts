import { AngularHybridPage } from './app.po';

describe('angular-hybrid App', () => {
  let page: AngularHybridPage;

  beforeEach(() => {
    page = new AngularHybridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
