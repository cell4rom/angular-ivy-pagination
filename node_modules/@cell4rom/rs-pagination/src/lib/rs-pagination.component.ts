import { Component, OnInit, EventEmitter, Input, SimpleChanges, Output } from '@angular/core';
import { paginate } from './rs-model';

@Component({
  selector: 'rs-pagination',
  template: `
  <div>
	<div class="row">
			<div class="col-md-5">
				<button class='btn btn-info btn-sm m-l-1em' (click)="firstPage()" [disabled]="currentPage === 1"><i class="fa fa-angle-double-left"></i></button>
				<button class='btn btn-info btn-sm m-l-1em' (click)="previousPage()" [disabled]="currentPage == 1"><i class="fa fa-angle-left"></i></button>
				<span style="margin-left: 10px;margin-right: 10px;">Page {{currentPage}}/{{pagesNumber}}</span> 
				<span>  </span>
        <span style="margin-left: 10px;margin-right: 10px;">Size</span>
        <select class="form-control form-control-sm pageSizeSelectBox" id="currentSize" 
                name="currentSize" [(ngModel)]="currentSize" (change)="changeSize(currentSize)">
					<option *ngFor="let size of sizes" value="{{size}}">{{size}}</option>
        </select>
				<button class='btn btn-info btn-sm m-l-1em' (click)="nextPage()" [disabled]="currentPage === pagesNumber"><i class="fa fa-angle-right"></i></button>
				<button class='btn btn-info btn-sm m-l-1em' (click)="lastPage()" [disabled]="currentPage === pagesNumber"><i class="fa fa-angle-double-right"></i></button>
			</div>
	</div>
</div>
  `,
  styles: [`
  .m-l-1em { 
    margin-left:1em; 
    width: 25px;
  }
  
  .pageSizeSelectBox {
    display: -webkit-inline-box;
    width: 11%;
    padding: 5px; 
  }
  
  `]
})
export class RsPaginationComponent implements OnInit {

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if(this.items && this.items.length){
      console.log("changes.items ",changes.items)
      this.pagesNumber = Math.ceil(this.items.length / this.currentSize) ;
    }
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.currentPage);
    }
  }

  constructor() { }

  @Input() items: Array<any>;
  @Input() currentSize = 5;
  @Input() maxPages = 5;
  currentPage: number = 1 ;
  pagesNumber: number ;
 

  public sizes = [5, 10, 20]

  
  @Output() changePage = new EventEmitter<any>(true);

  ngOnInit() {
  }

  lastPage(): void {
    this.currentPage = this.pagesNumber ; 
    this.setPage(this.currentPage);
  }

  firstPage(): void {
    this.currentPage = 1 ; 
    this.setPage(this.currentPage);
  }

  previousPage(): void {
    this.currentPage = this.currentPage - 1 ;
    this.setPage(this.currentPage);
  }

  nextPage(): void {
    this.currentPage = this.currentPage + 1 ;
    this.setPage(this.currentPage);
  }

   changeSize(size: number): void {
    this.setSize(size);
  }


  private setPage(page: number) {
    let pager = paginate(this.items.length, page, this.currentSize, this.maxPages);
    this.currentPage = pager.currentPage ;
    this.pagesNumber = pager.totalPages ;
    var pageOfItems = this.items.slice(pager.startIndex, pager.endIndex + 1);
    this.changePage.emit(pageOfItems);
  }

  private setSize(size: number) {
    let pager = paginate(this.items.length, this.currentPage ,size, this.maxPages);
    this.currentPage = pager.currentPage ;
    this.pagesNumber = pager.totalPages ;
    var pageOfItems = this.items.slice(pager.startIndex, pager.endIndex + 1);
    this.changePage.emit(pageOfItems);
  }

}
