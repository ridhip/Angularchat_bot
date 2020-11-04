import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { GetstartedComponent } from './getstarted.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GetstartedRoutingModule } from './getstarted-routing.module';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { FooterComponent } from '../footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  imports: [
      GetstartedRoutingModule,
      BrowserModule,
      CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppModule,
     // RouterModule.forRoot(app),
  ],
  declarations: [
    GetstartedComponent,
     DashboardComponent,
     FormsComponent,
     ButtonsComponent,
     NavbarComponent,
     FooterComponent,
     SidebarComponent,
  ],
})
export class GetstartedModule { }
