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

  constructor(private topReposService: TopReposService) { }

  ngOnInit(): void {
    this.getTopRepos();
  }

  getTopRepos(): void {
    this.topReposService.getTopRepos().pipe(take(1)).subscribe((res: Response) => {
      this.topRepos = res.items
      console.log(this.topRepos);
    })
  }

}
