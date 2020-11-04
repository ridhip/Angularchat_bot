import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PageComponent } from './page/page.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './getstarted/dashboard/dashboard.component';
import { FormsComponent } from './getstarted/forms/forms.component';
import { ButtonsComponent } from './getstarted/buttons/buttons.component';



const routes: Routes = [

 /* { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },*/
  { path: '', redirectTo: '/welcomepage', pathMatch: 'full' },
  { path: 'welcomepage', component: WelcomepageComponent},
  { path: 'page', component: PageComponent  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'getstarted', component: GetstartedComponent ,
  children: [ {
    path: '', component: DashboardComponent },
    {path: 'dashboard', component: DashboardComponent },
     { path: 'forms', component: FormsComponent },
      { path: 'buttons', component: ButtonsComponent },
],
},
  // { path: '**', component: WelcomepageComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: false, // <-- debugging purposes only
    })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
