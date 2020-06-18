import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchString = new Subject<string>();

  constructor() { }

  getString(): Observable<string> {
    return this.searchString.asObservable();
 }

  updateString(search: string) {
    this.searchString.next(search);
  }
  
}
