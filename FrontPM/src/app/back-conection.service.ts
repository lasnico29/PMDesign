import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackConectionService {

    private apiURL = 'aquivaellink';
  constructor(private http: HttpClient) { }


  //Metodos
  get productos()
  {
    return this.http.get(this.apiURL);
  }
}
