import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgOtpInputModule } from 'ng-otp-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { InputWordComponent } from './game/input-word/input-word.component';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CongotemplateComponent } from './congotemplate/congotemplate.component';
import { LosetemplateComponent } from './losetemplate/losetemplate.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    InputWordComponent,
    HeaderComponent,
    CongotemplateComponent,
    LosetemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
