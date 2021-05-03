import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '../models/response'
import { Repo } from '../models/repo'


@Injectable({
  providedIn: 'root'
})
export class TopReposService {

  baseUrl = 'https://api.github.com/search/repositories?q=created:>2017-10-22&per_page=10&sort=stars&order=desc';
  constructor(private http: HttpClient) { }

  getTopRepos(pageNumber: number): Observable<Response> {
    return this.http.get<Response>(this.baseUrl, { params: { page: pageNumber.toString() } })
      .pipe(map(res => ({
        ...res,
        items: res.items.map(item => <Repo>({
          id: item.id,
          name: item.name,
          description: item.description,
          stargazers_count: item.stargazers_count,
          open_issues_count: item.open_issues_count,
          owner: {
            avatar_url: item.owner.avatar_url,
            login: item.owner.login
          }
        }))
      })))
  }
}