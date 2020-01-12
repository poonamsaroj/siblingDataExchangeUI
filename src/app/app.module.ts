import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './dashboard/form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './dashboard/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'dashboard',    
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
