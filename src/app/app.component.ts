import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Photo } from './photo'
import {SearchService } from './search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  public searchTerm: string;

  constructor(private httpService: HttpClient, private searchService: SearchService) {
  }


  ngOnInit () {
  }


  public searchInput(searchTerm: string) {
    this.searchService.updateString(searchTerm)
  }
}
