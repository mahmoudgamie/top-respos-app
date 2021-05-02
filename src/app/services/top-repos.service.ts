import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
 import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopReposService {

  constructor(private http: HttpClient) { }

  getTopRepos() {
    return this.http.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
  }
}