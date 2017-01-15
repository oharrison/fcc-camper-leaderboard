import { FccCamperLeaderboardPage } from './app.po';

describe('fcc-camper-leaderboard App', function() {
  let page: FccCamperLeaderboardPage;

  beforeEach(() => {
    page = new FccCamperLeaderboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
