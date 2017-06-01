import { MakalePage } from './app.po';

describe('makale App', () => {
  let page: MakalePage;

  beforeEach(() => {
    page = new MakalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
