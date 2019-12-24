import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchBookService {


  constructor(private http: HttpClient) { }
  
  public findBookByISBN(ISBN: String): Observable<any> {
    return this.http.get(`${environment.MICROSERVICE_SEARCH_BOOK_URL}/search/isbn/${ISBN}`);
  }
}
