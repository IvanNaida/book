import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ControllerComponent } from './main-content/controller/controller.component';
import { BookSideComponent } from './main-content/book-side/book-side.component';
import { SizeControllerComponent } from './main-content/controller/size-controller/size-controller.component';
import { ColorControllerComponent } from './main-content/controller/color-controller/color-controller.component';
import { SidesBarComponent } from './main-content/sides-bar/sides-bar.component';
import { TextControllerComponent } from './main-content/controller/text-controller/text-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ControllerComponent,
    BookSideComponent,
    SizeControllerComponent,
    ColorControllerComponent,
    SidesBarComponent,
    TextControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
