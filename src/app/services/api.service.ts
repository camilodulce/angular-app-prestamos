import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }
  
  postUsuario(data: any) {
    return this.http.post<any>(`${this.apiUrl}users`, data);
  }

  putUsuario(data: any, id: number) {
    return this.http.put<any>(`${this.apiUrl}users/`+id, data);
  }

  getUsuarios() {
    return this.http.get<any>(`${this.apiUrl}users`);
  }

}
