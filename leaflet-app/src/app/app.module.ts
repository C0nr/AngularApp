import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {GenericInputComponent} from "./generic-input/generic-input.component";

/** Import animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Import Alyle UI */
import {
  LyThemeModule,
  LY_THEME
} from '@alyle/ui';

/** Import the component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { CommonModule } from '@angular/common';
import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    GenericInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    CommonModule,
    LyCommonModule,
    LyGridModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true } // name: `minima-dark`
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
