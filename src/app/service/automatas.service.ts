import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Automata } from '../models/automata';

@Injectable({
  providedIn: 'root'
})
export class AutomatasService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/grammar'

  createAutomata(automata: Automata): Observable <any> {
    console.log('Servicio ', automata);
    return this.http.post(this.url, automata);
  }
}
