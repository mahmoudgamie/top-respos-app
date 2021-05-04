import { Component, OnInit } from '@angular/core';
import { TopReposService } from '../services/top-repos.service'
import { take } from 'rxjs/operators'
import { Repo } from '../models/repo';
import { Response } from '../models/response';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-top-repos-list',
  templateUrl: './top-repos-list.component.html',
  styleUrls: ['./top-repos-list.component.css']
})
export class TopReposListComponent implements OnInit {

  topRepos: Repo[] = [];
  response: Response;
  currentPage: number = 1;

  constructor(private topReposService: TopReposService) { }

  ngOnInit(): void {
    this.getTopRepos();
  }

  getTopRepos(pageNumber = 1): void {
    this.topReposService.getTopRepos(pageNumber).pipe(
      take(1),
      debounceTime(500),
      distinctUntilChanged()).subscribe((res: Response) => {
        this.response = res;
        this.topRepos = this.topRepos.concat(res.items);
        console.log(this.topRepos);
      })
  }

  onScroll() {
    this.currentPage++;
    this.getTopRepos(this.currentPage);
  }

}
