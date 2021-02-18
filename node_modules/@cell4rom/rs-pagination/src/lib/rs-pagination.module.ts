import { NgModule } from '@angular/core';
import { RsPaginationComponent } from './rs-pagination.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RsPaginationComponent],
  exports: [RsPaginationComponent]
})
export class RSPaginationModule { }
