import { Component, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RsPaginationService } from './rs-pagination.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  public list_api: any[]; 
  
  public page: number;
  public pagesNumber: number;
  public size_api: number;

  public list: any[]; 
  public pageOfItems: Array<any>;
  public size: number = 5;
  
  constructor(private rsPaginationService : RsPaginationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
) {
}

onChangePage(pageOfItems: Array<any>) {
  this.pageOfItems = pageOfItems;
}

ngOnInit(): void {
  this.rsPaginationService.searchForMovieByObservable1("30")
  .subscribe(
  res => {
        this.list = res.data;
          },
  error => {
  });
  
  this.activatedRoute.queryParams
  .subscribe(params => {
              this.rsPaginationService.searchForMovieByObservable2(
                params['page'], params['size']
              )
              .subscribe(
              res => {
                    this.list_api = res.data;
                    this.page = res.page;
                    this.pagesNumber = res.total_pages;
                    this.size_api = res.per_page;
                      },
              error => {
              });
   });
}
}
