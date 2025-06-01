export class Product{
    public readonly name:string;
    public price:number;
    public quantity:number;
    
    constructor(n:string, p:number, q:number){
        this.name = n;
        this.price = p;
        this.quantity = q;
    }

    public getName(): string{
        return this.name;
    }

    public getPrice(): number{
        return this.price;
    }

    public setPrice(p:number): void{
        if(p <= 0){
            return;
        }
        this.price = p;
    }

    public getQuantity(): number{
        return this.quantity;
    }

    public setQuantity(q: number): void{
        if(q <= 0){
            return;
        }
        this.quantity = q;
    }
}

