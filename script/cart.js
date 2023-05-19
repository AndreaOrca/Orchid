let openShopping = document.querySelector(".shop-box");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
	body.classList.add("active");
});

document.addEventListener("click", (event) => {
	if (event.target.classList.contains("closeShopping")) {
		body.classList.remove("active");
	}
});

let products = [
	{
		id: 1,
		name: "Chocolate Cake",
		image: "chocolate-cake.png",
		description: "A classic cake made with chocolate and cocoa powder, often layered with chocolate frosting.",
		price: "Php" + " " + 1250,
	},
	{
		id: 2,
		name: "Red Velvet Cake",
		image: "redvelvet-cake.png",
		description: "A cake with a distinctive red color and subtle chocolate flavor, typically layered with cream cheese frosting.",
		price: "Php" + " " + 1500,
	},
	{
		id: 3,
		name: "Carrot Cake",
		image: "carrot-cake.png",
		description: "A moist cake made with grated carrots, nuts, and spices, typically topped with cream cheese frosting.",
		price: "Php" + " " + 1750,
	},
	{
		id: 4,
		name: "Vanilla Cake",
		image: "vanilla-cake.png",
		description: "A simple cake made with vanilla extract and often layered with vanilla buttercream frosting.",
		price: "Php" + " " + 1000,
	},
	{
		id: 5,
		name: "Lemon Cake",
		image: "lemon-cake.png",
		description: "A refreshing cake made with fresh lemon juice and zest, often layered with lemon buttercream frosting.",
		price: "Php" + " " + 1400,
	},
	{
		id: 6,
		name: "Croissant",
		image: "croissant.png",
		description: "A flaky, buttery pastry with a crescent shape that can be served plain or filled with various ingredients.",
		price: "Php" + " " + 60,
	},
	{
		id: 7,
		name: "Pain au Chocolat",
		image: "pain-au-chocolat.png",
		description: "A pastry made with croissant dough and filled with chocolate, similar to a chocolate croissant.",
		price: "Php" + " " + 70,
	},
	{
		id: 8,
		name: "Éclair",
		image: "eclair.png",
		description: "A pastry made with choux dough, filled with cream and often topped with chocolate or icing.",
		price: "Php" + " " + 90,
	},
	{
		id: 9,
		name: "Fruit Tart",
		image: "fruit-tart.png",
		description: "A pastry crust filled with pastry cream and topped with fresh fruits, often served as a dessert.",
		price: "Php" + " " + 100,
	},
	{
		id: 10,
		name: "Macaron",
		image: "macaron.png",
		description: "A delicate almond flour-based cookies sandwiched together with a filling, available in various flavors and colors.",
		price: "Php" + " " + 70,
	},
	{
		id: 11,
		name: "Blueberry Muffin",
		image: "blueberry-muffin.png",
		description: "A classic muffin made with fresh or frozen blueberries and a tender crumb, popular for breakfast or snack.",
		price: "Php" + " " + 50,
	},
	{
		id: 12,
		name: "Chocolate Chip Muffin",
		image: "chocolate-chip-muffin.png",
		description: "A muffin made with chocolate chips and a light and fluffy texture, giving it a rich, chocolatey flavor.",
		price: "Php" + " " + 55,
	},
	{
		id: 13,
		name: "Banana Nut Muffin",
		image: "banana-nut-muffin.png",
		description: "A moist muffin made with ripe bananas and chopped nuts, often topped with a streusel crumb topping.",
		price: "Php" + " " + 60,
	},
	{
		id: 14,
		name: "Lemon Poppy Seed Muffin",
		image: "lemon-poppy-seed-muffin.png",
		description: "A muffin made with lemon zest and poppy seeds, often topped with a lemon glaze.",
		price: "Php" + " " + 65,
	},
	{
		id: 15,
		name: "Double Chocolate Muffin",
		image: "double-chocolate-muffin.png",
		description: "A rich and indulgent muffin made with cocoa powder and chocolate chips, perfect for chocolate lovers.",
		price: "Php" + " " + 70,
	},
];

let listCards = [];

function initApp() {
	products.forEach((value, key) => {
		let newDiv = document.createElement("div");
		newDiv.classList.add("item");
		newDiv.innerHTML = `
			<div class="title">${value.name}</div>
            <img src="images/${value.image}"/>
			<div class="description">${value.description}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to Cart</button>`;
		list.appendChild(newDiv);
	});
}

function addToCard(key) {
	if (listCards[key] == null) {
		// Copy products from list to listCards
		listCards[key] = JSON.parse(JSON.stringify(products[key]));
		listCards[key].quantity = 1;
	}
	reloadCard();
}

function reloadCard() {
	listCard.innerHTML = "";
	let count = 0;
	let totalPrice = 0;
	listCards.forEach((value, key) => {
		totalPrice += parseFloat(value.price.replace(/[^0-9.-]+/g, ""));
		count += value.quantity;

		if (value != null) {
			let newDiv = document.createElement("li");
			newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
			listCard.appendChild(newDiv);
		}
	});
	// Add the checkOut div after the listCard
	let checkOutDiv = document.createElement("div");
	checkOutDiv.classList.add("checkOut");
	checkOutDiv.innerHTML = `
		<div class="total">${totalPrice.toLocaleString()}</div>
		<div class="buy">Buy Now</div>
	`;
	listCard.appendChild(checkOutDiv);
	total.innerText = totalPrice.toLocaleString();
	quantity.innerText = count;
}

function changeQuantity(key, quantity) {
	if (quantity === 0) {
		delete listCards[key];
	} else {
		listCards[key].quantity = quantity;
		listCards[key].price = "Php " + (quantity * parseFloat(products[key].price.replace(/[^0-9.-]+/g, ""))).toLocaleString();
	}
	reloadCard();
}

initApp();
