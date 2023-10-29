import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServProductosService {

  private url  = "kjdask.com"
  constructor(private http : HttpClient) { }


  getA()
  {
    return this.http.get(this.url);
  }
}
