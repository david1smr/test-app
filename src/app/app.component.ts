import { Component, OnInit } from '@angular/core';
import {SearchService } from './search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  public searchTerm: string;

  constructor(private searchService: SearchService) {
  }

  public searchInput(searchTerm: string) {
    this.searchService.updateString(searchTerm);
  }
}
