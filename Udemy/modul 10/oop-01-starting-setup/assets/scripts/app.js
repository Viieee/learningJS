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
        // for of akan dieksekusi sebanyak item yang ada di array
        for(const prod of this.products){ // for each element in products array property 
            const productItem = new ProductItem(prod); // rendering the items, mempass prod ke class tsb
            console.log('ini class ProductList' + prod);
            const liEl = productItem.render();
            ulProdList.append(liEl);
        }
        return ulProdList;
    }
}

// logic to render per item
class ProductItem {
    // product adalah value yang dipass dari class ProductList
    constructor(product){
        this.product = product; // akan membuat property bernama product berdasar value yang didapat dari instansiasi class
    }
    addToCartHandler(){
        console.log(`Adding ${this.product.name} to cart!`); // this disini merefer ke class , karena sudah di bind pada event listener
        App.addProductToCart(this.product);
        console.log('ini class ProductItem' + this.product);
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

// akan dieksekusi tiap item ditambahkan ke cart, per item.
class ShoppingCart{
    item = [];
    
    set cartItems(value){
        this.item = value;
        this.totalOutput.innerHTML = `<h2>Total \$${this.totalAmount}</h2>`; // this merefer ke item yang dipass dari addProduct
    }

    // get akan membuat property baru
    get totalAmount(){
        const sum = this.item.reduce(function(prevValue, curItem){
            return prevValue + curItem.price;
        },0); // 0 is the initial value
        return sum;
    }

    addProduct(product){
        const updatedItems = [...this.item];
        updatedItems.push(product);
        this.cartItems = updatedItems;
        console.log(updatedItems); // cartItems item berbentuk array yang dicopy yang akan dipass ke cartItems
    }
    
    render(){
        const cartElement = document.createElement('section');
        cartElement.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        cartElement.className = 'cart';
        const cartButton = cartElement.querySelector('button');
        this.totalOutput = cartElement.querySelector('h2');
        return cartElement;
    }
}

class Shop{
    cart;

    render(){
        const renderDiv = document.getElementById('app');
        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();
        renderDiv.append(cartEl);
        renderDiv.append(prodListEl);
    }
}

// this static method in class is used to glue together a bunch of other classes
class App{
    //static property 
    static cart;
    // static method
    static init(){
        const shop = new Shop(); // returning an object
        shop.render(); // karena di class shop cart harus dirender dulu sebelum bisa diakses
        this.cart = shop.cart; // this.cart membuat property baru pada class ini / merefer ke static property di class ini, 
                            // lalu direference ke property cart di class Shop
                            // property cart pada class shop adalah object berdasar class ShoppingCart
                            // jadi memungkinkan untuk menggunakan method yang ada di class ShoppingCart 
    }
    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

//eksekusi method static
App.init();

