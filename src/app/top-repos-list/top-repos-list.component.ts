import { Component, OnInit } from '@angular/core';
import { TopReposService } from '../services/top-repos.service'
import { IResponse, IRepo } from '../models/response';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-top-repos-list',
  templateUrl: './top-repos-list.component.html',
  styleUrls: ['./top-repos-list.component.css']
})
export class TopReposListComponent implements OnInit {

  topRepos: IRepo[] = [];
  response: IResponse;
  currentPage: number = 1;
  error: string = ''
  constructor(private topReposService: TopReposService, private loader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.getTopRepos();
  }

/**@brief fetches repos from service */
  getTopRepos(pageNumber = 1): void {
    this.loader.startBackground();
    this.topReposService.getTopRepos(pageNumber).pipe(
      take(1),
      debounceTime(500),
      distinctUntilChanged()).subscribe((res: IResponse) => {
        this.response = res;
        this.topRepos = this.topRepos.concat(res.items);
        this.loader.stopBackground();
        this.error = '';
      }, err => {
        this.error = err;
        this.currentPage = 1;
        this.topRepos = [];
        this.loader.stopBackground();
      })
  }

  /**@brief fetch more repos on scroll */
  onScroll() {
    if (this.response.incomplete_results) return;
    this.currentPage++;
    this.getTopRepos(this.currentPage);
  }

}
