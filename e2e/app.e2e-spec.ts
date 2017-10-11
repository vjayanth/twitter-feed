import { TwitterFeedPage } from './app.po';

describe('twitter-feed App', () => {
  let page: TwitterFeedPage;

  beforeEach(() => {
    page = new TwitterFeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
