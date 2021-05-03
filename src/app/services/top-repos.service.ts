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

  constructor(private http: HttpClient) { }

  getTopRepos(): Observable<Response> {
    return this.http.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc').pipe(map(res => ({
      incomplete_results: res['incomplete_results'],
      total_count: res['total_count'],
      items: res['items'].map(item => <Repo>({
        id: item.id,
        name: item.name,
        description: item.description,
        stargazers_count: item.stargazers_count,
        open_issues_count: item.open_issues_count,
        avatar_url: item.owner.avatar_url,
        username: item.owner.login
      }))
    })))
  }
}