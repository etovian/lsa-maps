import { LsaMapsPage } from './app.po';

describe('lsa-maps App', function() {
  let page: LsaMapsPage;

  beforeEach(() => {
    page = new LsaMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
