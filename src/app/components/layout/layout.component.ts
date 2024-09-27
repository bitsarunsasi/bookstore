import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  booksList: Book[] = [];
  keywordTrending: string = 'trending';
  constructor(
    private booksService: ProductsService
  ) { }

  ngOnInit() {
    this.getAllBooks()
  }

  getAllBooks() {
    this.booksService.getBooks().subscribe({
      next: (res: any) => {
        this.booksList = res;
      },
      error: (err: any) => { console.log(err) }
    })
  }
}
