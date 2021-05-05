import { Component, OnInit } from '@angular/core';
import { TopReposService } from '../services/top-repos.service'
import { Repo } from '../models/repo';
import { Response } from '../models/response';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-top-repos-list',
  templateUrl: './top-repos-list.component.html',
  styleUrls: ['./top-repos-list.component.css']
})
export class TopReposListComponent implements OnInit {

  topRepos: Repo[] = [];
  response: Response;
  currentPage: number = 1;
  err: string = ''
  constructor(private topReposService: TopReposService, private loader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.getTopRepos();
  }

  getTopRepos(pageNumber = 1): void {
    this.loader.startBackground();
    this.topReposService.getTopRepos(pageNumber).pipe(
      take(1),
      debounceTime(500),
      distinctUntilChanged()).subscribe((res: Response) => {
        this.response = res;
        this.topRepos = this.topRepos.concat(res.items);
        this.loader.stopBackground();
      }, err => {
        this.err = err;
        this.currentPage = 1;
        this.topRepos = [];
        this.loader.stopBackground();
      })
  }

  onScroll() {
    if (!this.response.incomplete_results) return;
    this.currentPage++;
    this.getTopRepos(this.currentPage);
  }

}
