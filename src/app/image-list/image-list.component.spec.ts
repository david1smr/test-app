import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SearchService } from './../search.service';
import { ImageListComponent } from './image-list.component';
describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;
  beforeEach(() => {
    const searchServiceStub = () => ({
      getString: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ImageListComponent],
      providers: [{ provide: SearchService, useFactory: searchServiceStub }]
    });
    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      const req = httpTestingController.expectOne('./../assets/MOCK_DATA.json');
      expect(req.request.method).toEqual('GET');
      req.flush();
      httpTestingController.verify();
    });
  });
});
