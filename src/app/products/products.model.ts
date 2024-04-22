export class ProductInfo {
    public productName: string;
    public productPrice: string;
    public productImage: string;

    constructor(name: string, price:string, img:string) {
        this.productName = name;
        this.productPrice = price;
        this.productImage = img;
    }
}