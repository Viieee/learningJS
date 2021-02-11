const productList = {
    products: [
        {
            name: 'Golf le fleur x Converse Gianno Ox Vintage White',
            image: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/e8J1lYUAQRq9S3x2vgwB',
            price: 220,
            description: 'Converse collab with golf le fleur'
        },
        {
            name: 'Golf le fleur x Converse Chuck taylor 70s High White',
            image: 'https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-70s-Hi-Golf-Le-Fleur-Parchment/Images/Converse-Chuck-Taylor-All-Star-70s-Hi-Golf-Le-Fleur-Parchment/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1607672662&w=1000',
            price: 200,
            description: 'Converse collab with golf le fleur'
        }
    ],
    render: function(){
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
                <img src="${prod.image}" alt="${prod.name}">
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