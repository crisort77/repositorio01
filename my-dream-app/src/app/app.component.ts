import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorial HttpClient';
  constructor(
    private _http: HttpClient  //se importa como servicio el componente mediante la inyeccion de dependencias en el contructor
  ){
    let form = new FormData();
    form.append('archivo', 'texto');
    this._http.get('https://jsonplaceholder.typicode.com/users')

    .subscribe(
      data => console.log(data),
      err => console.log(err),
    () => console.log("Peticion finalizada")
    )
  }
}
