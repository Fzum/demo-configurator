import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { VorsorgeConfigurationState, VorsorgeConfigurationStateModel } from './vorsorge-configuration.state';
import { VorsorgeConfigurationAction } from './vorsorge-configuration.actions';

describe('VorsorgeConfiguration store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([VorsorgeConfigurationState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: VorsorgeConfigurationStateModel = {
      items: ['item-1']
    };
    store.dispatch(new VorsorgeConfigurationAction('item-1'));
    const actual = store.selectSnapshot(VorsorgeConfigurationState.getState);
    expect(actual).toEqual(expected);
  });

});
