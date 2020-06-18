import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {SearchService } from './../search.service'
import { Photo } from './../photo'
import { Subscription } from "rxjs";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  public searchString: string;
  public photos: Photo[];
  public isDataAvailable: boolean = false;

  private subscription: Subscription;
  private photoFeed: Photo[];

  constructor(private httpService: HttpClient, private searchService: SearchService) {
    this.subscription = this.searchService.getString()
    .subscribe(searchTerm => this.filteredPhotos(searchTerm))
  }
 
  ngOnInit () {
    this.httpService.get('./../assets/MOCK_DATA.json').subscribe(
      data => {
        this.photoFeed = data as Photo [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    this.photos = this.photoFeed
  }


  private filteredPhotos(searchTerm: string): Photo[] {
    const searchTermString = searchTerm;
    if(!searchTermString){
      this.photos = this.photoFeed
      return this.photoFeed;
    }
    const searchString = searchTermString.trim().toLowerCase();
    this.photos = this.photoFeed.filter((item) => {
      if(item.text.toLowerCase().indexOf(searchString) !== -1 || item.id.toString().toLowerCase().indexOf(searchString) !== -1){
        return item;
      }
    })
    return this.photos;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
