const products = [];

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
        products.push(this);
    }

    // fetching all products
    static fetchAll(){
        return products;
    }
}