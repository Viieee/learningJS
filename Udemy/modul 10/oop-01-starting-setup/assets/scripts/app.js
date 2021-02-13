// containing product data
class Product {
    constructor(name,image,price,desc){
        //this akan mengarah ke class ini
        this.name = name;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}

class ProductList{
    products = [
        new Product(
        'GOLF Le Fleur Lacoste Teddy Jacket Green',
        'https://images.stockx.com/products/streetwear/GOLF-Le-Fleur-Lacoste-Teddy-Jacket-Green.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1603481985&w=1000',
        800,
        'Golf le fleur collab with lacoste'), //memanggil class
        new Product(
        'Golf le fleur x Converse Gianno Ox Vintage White',
        'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/e8J1lYUAQRq9S3x2vgwB',
        220,
        'Converse collab with golf le fleur'), //memanggil class
        new Product(
        'Golf le fleur x Converse Chuck taylor 70s High White',
        'https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Golf-Le-Fleur-Parchment/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Golf-Le-Fleur-Parchment/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1607672662&w=1000',
        200,
        'Converse collab with golf le fleur')
    ];

    constructor (){}

    render(){
        // create an unordered list
        const ulProdList = document.createElement('ul');
        ulProdList.className = 'product-list';
        for(const prod of this.products){ // for each element in products array property
            const productItem = new ProductItem(prod);
            const liEl = productItem.render();
            ulProdList.append(liEl);
        }
        return ulProdList;
    }
}

// logic to render per item
class ProductItem {
    constructor(product){
        this.product = product;
    }
    addToCartHandler(){
        console.log(`Adding ${this.product.name} to cart!`); // this disini merefer ke class , karena sudah di bind pada event listener
    }
    render(){
         // create li
         const liElementProduct = document.createElement('li');
         liElementProduct.className = 'product-item';
         liElementProduct.innerHTML = `
         <div>
             <img src="${this.product.imageUrl}" alt="${this.product.name}">
             <div class='product-item__content'>
                 <h2>${this.product.name}</h2>
                 <h3>\$${this.product.price}</h3>
                 <p>${this.product.description}</p>
                 <button>Add to Cart</button>
             </div>
         </div>
         `; // 'this' refering to the class, product is the property
         const addCartButton = liElementProduct.querySelector('button');
         addCartButton.addEventListener('click',this.addToCartHandler.bind(this)); //this.addToCartHandler, this digunakan untuk merefer ke method
                                                                                   // this pada bind merefer ke class ProductItem, mengarahkan.
         return liElementProduct;
    }
}

class ShoppingCart{
    item = [];
    render(){
        const cartElement = document.createElement('section');
        cartElement.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        cartElement.className = 'cart';
        const cartButton = cartElement.querySelector('button');
        return cartElement;
    }
}

class Shop{
    render(){
        const renderDiv = document.getElementById('app');
        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();
        renderDiv.append(cartEl);
        renderDiv.append(prodListEl);
    }
}

const shop = new Shop();
shop.render();
