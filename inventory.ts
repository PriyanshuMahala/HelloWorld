import { Product } from "./product";

class Inventory{
    public Products: Map<string, Product>

    constructor(pr: Product){
        this.Products = new Map();
        this.Products.set(pr.getName(),pr); 
    }

    public getSize(): number{
        return this.Products.size;
    }

    public getProductByKey(key: string): Product{
        
    }
}