import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test-app';
  authorNameSearchString: String;
  photoFeed: any[];
  photos: any[];


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


  filteredPhotoFeed(newObj) {
    var nameSearchString = newObj;
    if(!nameSearchString){
      this.photos = this.photoFeed
      return this.photoFeed;
    }
    let searchString = nameSearchString.trim().toLowerCase();
    this.photos = this.photoFeed.filter(function(item){
      if(item.text.toLowerCase().indexOf(searchString) !== -1 || item.id.toString().toLowerCase().indexOf(searchString) !== -1){
        return item;
      }
    })
    return this.photos;
  }
}
