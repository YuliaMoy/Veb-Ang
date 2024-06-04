import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient) { }

  // GET запит
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST запит
  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // PUT запит
  updateItem(id: number, item: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, item, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // DELETE запит
  deleteItem(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
