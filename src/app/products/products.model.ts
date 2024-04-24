export class ProductInfo {
    public productName: string;
    public productPrice: string;
    public productImage: string;
    public isHeartClicked: boolean;

    constructor(name: string, price:string, img:string, heartClicked: boolean = false) {
        this.productName = name;
        this.productPrice = price;
        this.productImage = img;
        this.isHeartClicked = heartClicked; 
    }
}