import { FriendsRoutingModule } from './friends-routing.module';

describe('FriendsRoutingModule', () => {
  let friendsRoutingModule: FriendsRoutingModule;

  beforeEach(() => {
    friendsRoutingModule = new FriendsRoutingModule();
  });

  it('should create an instance', () => {
    expect(friendsRoutingModule).toBeTruthy();
  });
});
