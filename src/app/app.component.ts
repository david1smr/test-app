import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Photo } from './photo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  public authorNameSearchString: string;
  public photos: Photo[];

  private photoFeed: Photo[];

  constructor(private httpService: HttpClient) {
  }


  ngOnInit () {
    this.httpService.get('./assets/MOCK_DATA.json').subscribe(
      data => {
        this.photoFeed = data as any [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    this.photos = this.photoFeed
  }


  public filteredPhotoFeed(searchTerm: string): Photo[] {
  const nameSearchString = searchTerm;
    if(!nameSearchString){
      this.photos = this.photoFeed
      return this.photoFeed;
    }
    const searchString = nameSearchString.trim().toLowerCase();
    this.photos = this.photoFeed.filter((item) => {
      if(item.text.toLowerCase().indexOf(searchString) !== -1 || item.id.toString().toLowerCase().indexOf(searchString) !== -1){
        return item;
      }
    })
    return this.photos;
  }
}
