/* tslint:disable:no-unused-variable */
import { async, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/core/testing';

import {WelcomeComponent} from "./welcome.component";

////////  SPECS  /////////////

describe('WelcomeComponent with TCB', function () {

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(WelcomeComponent).then(fixture => {
        expect(fixture.componentInstance instanceof WelcomeComponent).toBe(true, 'should create AppComponent');
      });
    })));

  it('page title should be produce tracker',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(WelcomeComponent).then(fixture => {
        expect(fixture.componentInstance.pageTitle).toBe('Welcome', 'page title should be Welcome');
      });
    })));
});
