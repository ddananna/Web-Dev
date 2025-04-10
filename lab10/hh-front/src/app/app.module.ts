import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    VacancyListComponent,
    HomePageComponent,
    CompanyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
