import { FriendsModule } from './friends.module';

describe('FriendsModule', () => {
  let frendsModule: FriendsModule;

  beforeEach(() => {
    frendsModule = new FriendsModule();
  });

  it('should create an instance', () => {
    expect(frendsModule).toBeTruthy();
  });
});
