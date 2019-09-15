import { CarpetModule } from './carpet.module';

describe('HomeModule', () => {
  let homeModule: CarpetModule;

  beforeEach(() => {
    homeModule = new CarpetModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
