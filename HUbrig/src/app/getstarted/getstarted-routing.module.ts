import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GetstartedComponent } from './getstarted.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';


const routes: Routes = [

   { path: 'getstarted',
  component : GetstartedComponent,
  children: [ {
    path: '', component: DashboardComponent },
    {path: 'dashboard', component: DashboardComponent },
     {path: 'forms', component: FormsComponent },
      { path: 'buttons', component: ButtonsComponent },
],
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetstartedRoutingModule {
}
