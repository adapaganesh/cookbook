import { CbPage } from './app.po';

describe('cb App', function() {
  let page: CbPage;

  beforeEach(() => {
    page = new CbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
