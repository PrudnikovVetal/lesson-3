import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  title = 'lesson app';
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  term = ""

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getALL()
    //   .pipe(
    //     tap(() => this.loading = false)
    //   )
    this.productsService.getALL().subscribe(() => {
      this.loading = false
    })
  }
}
