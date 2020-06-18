import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
describe('SearchService', () => {
  let service: SearchService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SearchService] });
    service = TestBed.get(SearchService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
