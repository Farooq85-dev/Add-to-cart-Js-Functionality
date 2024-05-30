//Products will be added here
const products = [
    {
        "id": 1,
        "name": "Product #01",
        "image": "./images/1.jpg",
        "price": 2000,
    },
    {
        "id": 2,
        "name": "Product #02",
        "image": "./images/2.jpg",
        "price": 22200,
    },
    {
        "id": 3,
        "name": "Product #03",
        "image": "./images/3.jpg",
        "price": 12400,
    },
    {
        "id": 4,
        "name": "Product #04",
        "image": "./images/4.jpg",
        "price": 26000,
    },
    {
        "id": 5,
        "name": "Product #05",
        "image": "./images/5.jpg",
        "price": 14040,
    },
    {
        "id": 6,
        "name": "Product #06",
        "image": "./images/6.jpg",
        "price": 18070,
    }
];

// Define Variable
const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector("#closeShopping");
const body = document.querySelector("body");
const list = document.getElementById("list");
const listCart = document.querySelector(".listCart");
const total = document.querySelector("#total");
const quantity = document.querySelector("#quantity");

//Open Cart
openShopping.addEventListener("click", () => {
    body.classList.add("active");
});

//Close Cart
closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

//Loop through the All Products
const productsLooping = () => {
    products.forEach((obj, index) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
        <img src="${obj.image}"/>
        <h4 class="title">${obj.name}</h4>
        <h4 class="price">${obj.price} PKR</h4>
        <button onclick = "addToCart(${index})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    });
};
//Now run the function
productsLooping();

let listCarts = [];
const addToCart = index => {
    if (listCarts[index] == null) {
        listCarts[index] = JSON.parse(JSON.stringify(products[index]));
        listCarts[index].quantity = 1;
    }
    cartOnReload();
}

// Get products from and show in cart 
const cartOnReload = () => {
    listCart.innerHTML = "";
    let totalPrice = 0;
    let count = 0;

    listCarts.forEach((obj, index) => {
        totalPrice = totalPrice + obj.price;
        count = count + obj.quantity;
        if (obj != null) {
            let li = document.createElement("li");
            const { image, name, price, quantity } = obj;
            li.innerHTML = `
            <div><img src = "${image}"></div>
                <div class = "cardTitle">${name}</div>
                <div = "cardPrice">${price.toLocaleString()}</div>
                <div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${index}, ${obj.quantity - 1})">-</button>
                    <div class = "count">${quantity}</div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${index}, ${obj.quantity + 1})">+</button>
                </div>
            `;
            listCart.appendChild(li);
        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    });
}

//Quantity Control
const changeQuantity = (index, quantity) => {
    if (quantity == 0) {
        delete listCards[index];
    }
    else {
        listCarts[index].quantity = quantity;
        listCarts[index].price = quantity * products[index].price;
    }
    cartOnReload();
}
