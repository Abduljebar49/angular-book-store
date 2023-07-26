import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BookComponent } from './book/book.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BookComponent
  ]
})
export class SharedModule { }
