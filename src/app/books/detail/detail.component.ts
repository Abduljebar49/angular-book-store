import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Book } from 'src/app/models/book';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: number | undefined;
  book: Book | undefined;
  quantity: number = 0;
  constructor(private service: AppService, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params["id"];
    console.log(this.id)
  }
  ngOnInit(): void {
    this.getABook();
  }

  getABook() {
    this.book = this.service.getBook(this.id);
    if (this.book) {
      this.quantity = this.book.quantity;
    }
  }

  isItemAvailable() {
    if (this.book) {
      if (this.quantity > 0) {
        return true
      }
    }
    return false;
  }



  showAlert(type: string, past: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton: 'bg-orange-600 p-2 rounded text-white m-2',
        confirmButton: 'bg-blue-400 p-2 rounded text-white m-2',
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: `You are about to ${type} a book`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: `Yes, ${type} it!`,
      confirmButtonColor: 'orange',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          `${past}`,
          `the given book has been ${past}.`,
          'success'
        )
        this.reduceQuantity();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  reduceQuantity() {
    this.quantity -= 1;
  }
}
