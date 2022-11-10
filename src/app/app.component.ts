import {Component, OnInit} from '@angular/core';
import {IProduct} from './models/product';
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lesson app';
  // products: IProduct[] = []
  loading = false
  products$: Observable <IProduct[]>


  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getALL().pipe(
      tap(()=>this.loading= false)
    )
    // this.productsService.getALL().subscribe(products=>{
    //   this.products=products
    //   this.loading = false
    // })
  }

}
