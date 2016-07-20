
import {async, inject, TestComponentBuilder,beforeEach,expect,it,describe, addProviders} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {Router, ActivatedRoute} from "@angular/router";
import { APP_BASE_HREF} from "@angular/common";
import {appRouterProviders} from './app.routes';


class MockRouter{}
class MockActivatedRoute{}
////////  SPECS  /////////////

describe('AppComponent with TCB', function () {

  let builder : TestComponentBuilder;
  beforeEach(() => addProviders([
    appRouterProviders, // must be first
    {provide: APP_BASE_HREF, useValue: '/'}, // must be second
    {provide: ActivatedRoute, useClass: MockActivatedRoute},
    {provide: Router, useClass: MockRouter},
    TestComponentBuilder,
    AppComponent
  ]));

  beforeEach(inject([TestComponentBuilder], (tcb : TestComponentBuilder) => {
    builder = tcb;
  }));

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

    tcb.createAsync(AppComponent).then(fixture => {
      expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
  })));

  it('page title should be produce tracker',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(AppComponent).then(fixture => {
        expect(fixture.componentInstance.pageTitle).toBe('Produce Tracker', 'page title should be Produce Tracker');
      });
    })));

});
