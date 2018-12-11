import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Product } from "./product.model";

@Injectable()
export class ProductRepository{

    private products: Product[] = [];
    private catagories: string[] = [];

    constructor(private dataSource: StaticDataSource){
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.catagories = data.map(p => p.catagory)
                .filter((c, index,array) => array.indexOf(c)==index).sort();
        });
    }

    getProducts(catagory: string = null): Product[] {
        return this.products.filter(p => catagory == null || catagory == p.catagory);
    }

    getProduct(id: number): Product{
        return this.products.find(p => p.id == id)
    }

    getCatagories(): string[]{
        return this.catagories;
    }

}