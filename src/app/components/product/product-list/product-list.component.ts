import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productList: Book[] = [];
  activeCateg: any;
  constructor(
    private route: ActivatedRoute,
    private bookService: ProductsService
  ) { }

  ngOnInit() {
    this.getCategory();
    this.getCategBooks();
  }

  getCategory() {
    this.activeCateg = this.route.snapshot.paramMap.get('categ');
  }
  getCategBooks() {
    this.bookService.booksByCateg(this.activeCateg).subscribe({
      next: (res: any) => {
        this.productList = res;
      },
      error: (err: any) => { console.log(err) }
    })
  }
}
