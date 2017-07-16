import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { RegistrationComponent } from './students/registration/registration.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
