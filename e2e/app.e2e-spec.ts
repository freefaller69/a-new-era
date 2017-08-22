import { ANewEraPage } from './app.po';

describe('a-new-era App', () => {
  let page: ANewEraPage;

  beforeEach(() => {
    page = new ANewEraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
