import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbCardModule, NbFormFieldModule, NbStepperModule, NbIconModule, NbInputModule, NbMenuModule, NbUserModule, NbContextMenuModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StepcandidatoComponent } from './stepcandidato/stepcandidato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StepcandidatoComponent
  ],
  imports: [
    AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserModule, NbEvaIconsModule,
    NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule,NbLayoutModule,NbMenuModule.forRoot(),NbSelectModule,
    NbSidebarModule.forRoot(), NbStepperModule, NbThemeModule.forRoot({ name: 'default' }),NbUserModule, NbContextMenuModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
