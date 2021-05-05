import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IResponse, IRepo } from '../models/response'


@Injectable({
  providedIn: 'root'
})
export class TopReposService {

  baseUrl = 'https://api.github.com/search/repositories?q=created:>2017-10-22&per_page=10&sort=stars&order=desc';
  constructor(private http: HttpClient) { }

  getTopRepos(pageNumber: number): Observable<IResponse> {
    return this.http.get<IResponse>(this.baseUrl, { params: { page: pageNumber.toString() } })
      .pipe(map(res => ({
        ...res,
        items: res.items.map<IRepo>(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          created_at: item.created_at,
          stargazers_count: item.stargazers_count,
          open_issues_count: item.open_issues_count,
          owner: {
            avatar_url: item.owner.avatar_url,
            login: item.owner.login
          }
        }))
      })), catchError(err => {
        throw new Error(err.name);
      }))
  }
}