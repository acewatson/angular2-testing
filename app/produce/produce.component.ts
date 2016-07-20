import { Component, OnInit } from '@angular/core';
import {ProduceService} from "./produce.service";
import {IProduce} from "./produce";

@Component({
    moduleId: module.id,
    selector: 'app-produce',
    templateUrl: 'produce.component.html'
})
export class ProduceComponent implements OnInit {
  pageTitle: string = "Produce Page";
  produce: IProduce[];
  errorMessage: string;

  constructor(private _produceService: ProduceService) { }

    ngOnInit() {
      this._produceService.getProduce()
        .subscribe(
          produce => this.produce = produce,
          error => this.errorMessage = <any>error);
    }

}
