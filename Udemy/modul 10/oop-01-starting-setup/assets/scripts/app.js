class Product { //class harus kapital, class adalah blueprint dari object
    // fields adalah property dalam class
    // nama field harus sama kayak object yang lain
    name = 'Default value';
    imageUrl;
    price;
    desc;

    // berarti object yang based on this class akan memiliki propertie seperti field diatas

    // method inside class
    // productClassMethod(){}

    // constructor method
    // mengambil argumen dari luar ketika class dipanggil
    constructor(name,image,price,desc){
        //this akan mengarah ke class ini
        this.name = name;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}



const productList = {
    products: [
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
        'Converse collab with golf le fleur') //memanggil class
        // sama seperti
        // {
        //     name: 'Golf le fleur x Converse Chuck taylor 70s High White',
        //     imageUrl: 'https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Golf-Le-Fleur-Parchment/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Golf-Le-Fleur-Parchment/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1607672662&w=1000',
        //     price: 200,
        //     description: 'Converse collab with golf le fleur'
        // }
    ],
    render(){
        const renderDiv = document.getElementById('app');
        // create an unordered list
        const ulProdList = document.createElement('ul');
        ulProdList.className = 'product-list';
        for(const prod of this.products){ // for each element in products array property
            // create li
            const liElementProduct = document.createElement('li');
            liElementProduct.className = 'product-item';
            liElementProduct.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.name}">
                <div class='product-item__content'>
                    <h2>${prod.name}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
            ulProdList.append(liElementProduct);
        }
        renderDiv.append(ulProdList);
    }
};

productList.render();