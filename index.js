// 1.Sipariş al (1 Saniye)
// 2.Her malzeme için stok kontrolü (3 saniye)
// 2.1. Eğer stokta malzeme eksiği varsa uyarı mesajı verilmeli, işlem iptal edilmeli, yeni istek alınmamalı)
// 3. Köfte mi? - Tavuk mu? sorgusu(1 saniye)
// Köfte ise :
// 3.1. Pişme derecesi kontrolü
// 3.1.1. Az Pişmiş(2 saniye)
// 3.1.2. Orta Pişmiş (3 saniye)
// 3.1.3. Çok Pişmiş (4 saniye)
// Tavuk ise:
// 3.1. Tavuk Pişir (3 saniye)
// 3.2. Hamburger Yapımı(2 saniye): Köfte veya Tavuk(1 adet), Marul(1 adet), Domates(1 adet), Turşu(1 adet), Soğan(1 adet) hamburger ekmeğiyle birleştirilecek.
// Malzemeler siparişte varsa eklenmeli!
// 4. Patatesleri Kızart (5 saniye)
// 5. İçeçeği Hazırla (2 saniye)
// 6. Sosları ve Ürünleri Servis Tepsisine Koy (1 saniye)
// 7. Müşteriye Servis Et (1 saniye)
// 1. step --> 2. step --> 3,4,5 --> 6 --> 7
let steps = [
	{ id: 0, step: "1.0", title: "Order taking..." },
	{ id: 1, step: "2.0", title: "Stock Control..." },
	{ id: 2, step: "2.1", title: "Sorry, out of stock..." },
	{ id: 3, step: "3.1", title: "Hamburger is preparing with meatball..." },
	{ id: 4, step: "3.1.1", title: "Rare cooked meatball is prepared..." },
	{ id: 5, step: "3.1.2", title: "Medium cooked meatball is prepared..." },
	{ id: 6, step: "3.1.3", title: "Well cooked meatball is prepared..." },
	{ id: 7, step: "3.2", title: "Hamburger is preparing with chicken..." },
	{ id: 8, step: "3.3", title: "Hamburger is prepared..." },
	{ id: 9, step: "4.0", title: "Potatoes are frying..." },
	{ id: 10, step: "5.0", title: "Drink is prepared..." },
	{ id: 11, step: "6.0", title: "Read to service..." },
	{ id: 12, step: "7.0", title: "Enjoy your hamburger :)..." },
];
let myFridge = {
	lettuce: 5,
	souce: 5,
	onion: 5,
	meatball: 5,
	chicken: 5,
	tomato: 5,
	bread: 5,
	potato: 1,
	coke: 1,
};
/*
  - meatball --> rare,medium,well
  - chicken
	steps object
	functions: takeAnOrder, checklist, checkMeatType, cookMeat, prepareDrinks, prepareFries, addToPlate, finishOrder
*/
// An additional parameter to keep shop availablity
let isShopOpen = true;
// Meat type parameters
let MEAT = ["Meatball", "Chicken"];
// Cooking type parameters
let COOKING_TIME = ["rare", "medium", "well"];
// ORDER-1
let customerOrder1 = {
	meatType: MEAT[0],
	cookingTime: COOKING_TIME[0],
};
// ORDER-2
let customerOrder2 = {
	meatType: MEAT[1],
};


