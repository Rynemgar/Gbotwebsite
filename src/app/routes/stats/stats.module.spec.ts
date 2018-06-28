import { StatsModule } from './stats.module';

describe('HomeModule', () => {
  let homeModule: StatsModule;

  beforeEach(() => {
    homeModule = new StatsModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
