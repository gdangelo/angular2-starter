import {
  describe,
  it,
  expect,
  inject,
  injectAsync,
  beforeEach,
  TestComponentBuilder,
  ComponentFixture
} from 'angular2/testing';

import { App } from './app';

describe('App', () => {
  let fixture: ComponentFixture;

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    return tcb.createAsync(App)
      .then(f => fixture = f);
  }));

  it('should have a title', () => {
    // given a component instance
    let appCmp = fixture.componentInstance;

    // when we trigger the change detection
    fixture.detectChanges();

    // then we should have a name
    let element = fixture.nativeElement;
    expect(element.querySelector('h1')).toHaveText('Hello, Angular2!');
  });
});
