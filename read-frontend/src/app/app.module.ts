import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBookComponent } from './component/modal/create-book/create-book.component';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '**', redirectTo: '/index' },

]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateBookComponent,
    MainLayoutComponent
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  entryComponents: [
    CreateBookComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
