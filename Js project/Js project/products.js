
var arr =    [
  {
    "title": "Lemon Candy",
    "price": 100.55,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "lemon candy.webp",
    "rating": {
      "rate": 3.69,
      "count": 120
    }
  },
  {
    "title": "Fruit Ball",
    "price": 90.55,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "fruit ball.webp",
    "rating": {
      "rate": 4.51,
      "count": 259
    }
  },

  {
    "title": "Cola Candy",
    "price": 90.55,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "cola candy.webp",
    "rating": {
      "rate": 4.51,
      "count": 259
    }
  },

  {
    "title": "Mint Candy",
    "price": 100.35,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "mint candy.webp",
    "rating": {
      "rate": 4.51,
      "count": 259
    }
  },

  {
    "title": "Lychee Candy",
    "price": 122.53,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "lychee candy.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },

  {
    "title": "Mixed Fruit Candy",
    "price": 122.53,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "mixed fruit candy.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },

  {
    "title": "Cola candy",
    "price": 122.53,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "combo3.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },

  {
    "title": "Cola candy",
    "price": 122.53,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "combo.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },

  {
    "title": "Cola candy",
    "price": 122.53,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "combo2.webp",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
]
var parent = document.createElement("div");
parent.setAttribute("class","parent")

var arr1 = []

let totalPrice = 0; // Initialize total price variable
const totalPriceDisplay = document.createElement('div'); // Create a div to display total price
totalPriceDisplay.id = 'total-price'; // Set an ID for styling or easy reference
totalPriceDisplay.innerHTML = `<strong>Total Price:</strong> $${totalPrice.toFixed(2)}`;
document.body.appendChild(totalPriceDisplay); 



newarray = arr.map(function(val){

    
    var main = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src",val.image)
    image.style.borderRadius = "10px";
    //image.style.border = "2px solid red";

    var title = document.createElement("p");
    title.innerHTML = val.title;
    title.style.paddingLeft = "33%";

    var price = document.createElement("p");
    price.innerHTML = "<b>price :</b>"+ " " + val.price;
    price.style.paddingLeft = "33%";
    price.style.marginTop = "1%";

    var add = document.createElement("button");
    add.innerHTML = "Add to card";
    add.setAttribute("class","btn1")
    add.style.marginTop = "1%"
    add.style.paddingLeft = "35%";
    add.style.paddingRight = "40%";
    add.style.paddingTop = "2%";
    add.style.paddingBottom = "2%";


    add.addEventListener("click", function() {
      console.log(val); // This should now log the correct object
      arr1.push(val)
      totalPrice += val.price; // Update total price

      localStorage.setItem("arr",JSON.stringify(arr1))
      localStorage.setItem("totalPrice", totalPrice);
      totalPriceDisplay.innerHTML = `<strong>Total Price:</strong> $${totalPrice.toFixed(2)}`; // Update displayed total price
        console.log(`Added ${val.title} to cart. Total price: $${totalPrice.toFixed(2)}`);

    




    });
    
    parent.append(main);
    main.append(image,title,price,add)
    
    
    
    
    console.log(parent);
    
    document.body.appendChild(parent)
  })

  


const button1 = document.getElementById("search");
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

// Toggle search container visibility
button1.addEventListener("click", () => {
    searchContainer.classList.toggle('active'); // Show or hide the search container
    searchInput.focus(); // Focus on the input field when opened
});

// Filter products based on input
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    console.log(query);
    
    resultsDiv.innerHTML = ''; // Clear previous results

    if (query) {
        const filteredProducts = arr.filter(product => 
            product.title.toLowerCase().includes(query)
        );
        
        filteredProducts.forEach(product => {
            const div = document.createElement('div');
            div.classList.add('product-item');

            const img = document.createElement('img');
            img.src = product.image; // Set product image
            img.alt = product.title;

            const detailsDiv = document.createElement('div');
            detailsDiv.innerHTML = `<strong>${product.title}</strong> - $${product.price}`;

            const addButton = document.createElement('button');
            addButton.innerHTML = "Add to Cart";
            addButton.classList.add('btn-add');
            addButton.marginTop = "100px"
            addButton.addEventListener("click", () => {
               // console.log(`Added ${product.title} to cart`);

                arr1.push(product); // Add product to cart array
                totalPrice += product.price;
                localStorage.setItem("arr", JSON.stringify(arr1)); // Save cart to local storage
                //console.log(`Added ${product.title} to cart`);
                //console.log(`Added ${product.title} to cart. Total price: $${totalPrice.toFixed(2)}`);

                totalPriceDisplay.innerHTML = `<strong>Total Price:</strong> $${totalPrice.toFixed(2)}`; // Update displayed total price
                console.log(`Added ${val.title} to cart. Total price: $${totalPrice.toFixed(2)}`);


               
            });

            div.appendChild(img);
            div.appendChild(detailsDiv);
            div.appendChild(addButton);
            resultsDiv.appendChild(div);
        });
    }
});


