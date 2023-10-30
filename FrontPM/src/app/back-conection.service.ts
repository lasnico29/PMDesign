import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackConectionService {

    private apiURL = 'https://api.spacexdata.com/v4/rockets';
  constructor(private http: HttpClient) { }


  //Metodos
  get GetProductos()
  {
    return this.http.get(this.apiURL);
  }
}
