import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";

const routes: Routes = [{
  path: 'admin',
  pathMatch: 'full',
  component: EmptyRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
