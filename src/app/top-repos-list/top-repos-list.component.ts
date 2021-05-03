import { Component, OnInit } from '@angular/core';
import { TopReposService } from '../services/top-repos.service'
import { take } from 'rxjs/operators'
import { Repo } from '../models/repo';
import { Response } from '../models/response'

@Component({
  selector: 'app-top-repos-list',
  templateUrl: './top-repos-list.component.html',
  styleUrls: ['./top-repos-list.component.css']
})
export class TopReposListComponent implements OnInit {

  topRepos: Repo[]
  response: Response;

  constructor(private topReposService: TopReposService) { }

  ngOnInit(): void {
    this.getTopRepos();
  }

  getTopRepos(pageNumber = 1): void {
    this.topReposService.getTopRepos(pageNumber).pipe(take(1)).subscribe((res: Response) => {
      this.response = res;
      this.topRepos = this.response.items;
      console.log(this.topRepos);
    })
  }

}
