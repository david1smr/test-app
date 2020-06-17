import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Input() authorNameSearchString: string;

  photoFeed: any[];
  photos: any[];

  constructor(private httpService: HttpClient) {
  }
  ngOnChanges(changes: SimpleChanges) {

    if (this.photos) {
      this.filteredPhotoFeed(changes.authorNameSearchString.currentValue);
    }

  }
  ngOnInit () {
    this.httpService.get('./../assets/MOCK_DATA.json').subscribe(
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
