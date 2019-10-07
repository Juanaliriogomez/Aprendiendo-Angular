import { Component } from '@angular/core'; //importa component decoradodor desde el nucleo de angular

// utilizamos el decorador cpomponent para convertir todo el documento en un componente Angular
@Component({
  selector: 'app-root', // referencia a componente convirtienolo en una etiqueta Html <aapp-root>
  templateUrl: './app.component.html', // referencia al dociumento o sintaxis de html donde se anexa
  styleUrls: ['./app.component.css'] // refernecia a un css externo que le dara
})
export class AppComponent {
  title = 'my-app-angular';
  txt = 'Soy una variable interpolada'
}

// un componente llamado appcomponent que se guardará en una etiqueta llamada app-root
// que debe ser declarado 