import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
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
import {AuthGuard} from './auth.guard';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './getstarted/dashboard/dashboard.component';
import { FormsComponent } from './getstarted/forms/forms.component';
import { ButtonsComponent } from './getstarted/buttons/buttons.component';
import { PageModule } from './page/page.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';


@NgModule({
  declarations: [
    AppComponent,
    GetstartedComponent,
    PageComponent,
    LoginComponent,
    RegisterComponent,
    WelcomepageComponent,
    NavbarComponent,
    SidebarComponent,
    FormsComponent,
    DashboardComponent,
    ButtonsComponent,
    FooterComponent, /*
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PageComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    WelcomepageComponent,
    GetstartedComponent,
    LoginComponent,
    RegisterComponent,*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule.forRoot(),
      ],

  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(router: Router) {

}

 }
