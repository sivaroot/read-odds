import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudBookService {

  constructor(private http: HttpClient) { }

  public saveBook(bookInfo) : Observable<any> {
    return this.http.post(`${environment.MICROSERVICE_CRUD_BOOK_URL}/create-book`, bookInfo);
  }
}
