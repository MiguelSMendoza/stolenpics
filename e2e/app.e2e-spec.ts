import { StolenpicsPage } from './app.po';

describe('stolenpics App', () => {
  let page: StolenpicsPage;

  beforeEach(() => {
    page = new StolenpicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
