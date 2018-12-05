import { SideNavModule } from './side-nav.module';

describe('SideNavModule', () => {
  let sideNavModule: SideNavModule;

  beforeEach(() => {
    sideNavModule = new SideNavModule();
  });

  it('should create an instance', () => {
    expect(sideNavModule).toBeTruthy();
  });
});
