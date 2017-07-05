import { AlmundoAngular2Page } from './app.po';

describe('almundo-angular2 App', () => {
  let page: AlmundoAngular2Page;

  beforeEach(() => {
    page = new AlmundoAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
