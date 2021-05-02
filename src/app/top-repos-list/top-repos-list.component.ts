import { Component, OnInit } from '@angular/core';
import { TopReposService } from '../services/top-repos.service'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-top-repos-list',
  templateUrl: './top-repos-list.component.html',
  styleUrls: ['./top-repos-list.component.css']
})
export class TopReposListComponent implements OnInit {

  constructor(private topReposService: TopReposService) { }

  ngOnInit(): void {
    this.getTopRepos();
  }

  getTopRepos() {
    this.topReposService.getTopRepos().pipe(take(1)).subscribe(res => {
      console.log(res);

    })
  }

}
