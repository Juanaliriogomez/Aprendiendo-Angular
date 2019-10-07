import { BrowserModule } from '@angular/platform-browser'; // importando clase browsermodule
import { NgModule } from '@angular/core'; // importando NGmodule

import { AppComponent } from './app.component'; // importamos el componente app que exportamos en app.component.ts

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ], // se encarga de manejar los paquetes, librerias, plantillas o clases externos que necesita nuestro app para dsepliegue
  providers: [], // Proveer ´las dependencias y servicios de nuestro componente
  bootstrap: [AppComponent]  //inicialoizador de componente padre / main component
})
export class AppModule { }
