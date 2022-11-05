import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './partials/info/info.component';
import { RepositoryComponent } from './partials/repository/repository.component';
import { DocumentacionComponent } from './partials/documentacion/documentacion.component';
import { IntegrantesComponent } from './partials/integrantes/integrantes.component';
import { GeneracionProgramaComponent } from './partials/generacion-programa/generacion-programa.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InfoComponent,
    RepositoryComponent,
    DocumentacionComponent,
    IntegrantesComponent,
    GeneracionProgramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Toastr
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
