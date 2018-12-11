import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public selectedCatagory = null;
  public productsperPage = 4;
  public selectedPage = 1;

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router
    ) { }

  ngOnInit() {
  }

  get products(): Product[] {
    let pageindex = (this.selectedPage - 1) * this.productsperPage;
    return this.repository.getProducts(this.selectedCatagory)
      .splice(pageindex, this.productsperPage);
  }

  get catagories(): string[] {
    return this.repository.getCatagories();
  }

  // get pageNumbers(): number[] {
  //   //Return arrary filled with numbers say 1,2,3,4
  //   return Array(Math.ceil(this.repository.getProducts(this.selectedCatagory).length
  //   /this.productsperPage)).fill(0).map((x,i) => i +  1)
  // }

  get pageCount(): number{
    return Math.ceil(this.repository.getProducts(this.selectedCatagory).length /this.productsperPage);
  }

  changeCatagory(newCatagory: string){
    this.selectedCatagory= newCatagory;
    this.changePage(1);
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number){
    this.productsperPage = newSize;
  }

  addProductToCart(product: Product){
    this.cart.addLine(product);
    //this.router.navigateByUrl("/cart");
  }

}
