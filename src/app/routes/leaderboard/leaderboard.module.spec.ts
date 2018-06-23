import { LeaderboardModule } from './leaderboard.module';

describe('HomeModule', () => {
  let homeModule: LeaderboardModule;

  beforeEach(() => {
    homeModule = new LeaderboardModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
