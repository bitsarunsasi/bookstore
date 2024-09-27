import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  bookInfo!: Book;
  bookId: any;

  constructor(
    private router: ActivatedRoute,
    private bookService: ProductsService
  ) { }

  ngOnInit() {
    this.getBookId();
    this.getBook();
  }

  getBookId() {
    this.bookId = this.router.snapshot.paramMap.get('id');
    console.log(this.bookId)
  }

  getBook() {
    this.bookService.getBook(this.bookId).subscribe({
      next: (res: any) => { console.log(res) },
      error: (err: any) => { console.log(err) }
    })
  }
}
