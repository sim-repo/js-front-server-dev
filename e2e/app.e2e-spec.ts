import { JsFrontService2Page } from './app.po';

describe('js-front-service2 App', function() {
  let page: JsFrontService2Page;

  beforeEach(() => {
    page = new JsFrontService2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
