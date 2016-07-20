/* tslint:disable:no-unused-variable */
import {async, inject, addProviders} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';
import {ProduceComponent} from "./produce.component";
import {ProduceService} from "./produce.service";
import {Http, ConnectionBackend} from "@angular/http";
import {RequestOptions} from "http";

////////  SPECS  /////////////

class MockProduceService{}

describe('ProduceComponent with TCB', function () {

  beforeEach(() => addProviders([
    {provide: ProduceService, useClass: MockProduceService}
  ]))
  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(ProduceComponent).then(fixture => {
        expect(fixture.componentInstance instanceof ProduceComponent).toBe(true, 'should create AppComponent');
      });
    })));

  it('should have expected <h1> text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(ProduceComponent).then(fixture => {
        // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding

        let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

        expect(h1.innerText).toMatch(/Produce List/i, '<h1> should say something about "Produce List"');
      });

    })));
});
