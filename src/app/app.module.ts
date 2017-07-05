import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { HeaderComponent } from './header.component';
import { SearchBoxComponent } from './search-box.component';
import { TopNavComponent } from './top-nav.component';

import { HotelListModule } from './hotel-list/hotel-list.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SearchBoxComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    HotelListModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SearchBoxComponent,
    TopNavComponent
  ]
})
export class AppModule {}
