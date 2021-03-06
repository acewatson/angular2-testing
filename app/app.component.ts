import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from "@angular/router";
import {ProduceService} from "./produce/produce.service";
import {HTTP_PROVIDERS} from "@angular/http";



@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Produce Tracker</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/produce']">Produce</a></li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ProduceService, HTTP_PROVIDERS
  ]
})
export class AppComponent {
  pageTitle: string = "Produce Tracker";
}
