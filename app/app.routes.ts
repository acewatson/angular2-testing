import {ProduceComponent} from "./produce/produce.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {RouterConfig, provideRouter} from "@angular/router";


const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'produce',
    component: ProduceComponent
  }
];

export const appRouterProviders =[
  provideRouter(routes)
];
