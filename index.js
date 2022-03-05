"use strict";
// Steps for logging
let steps = [
	{ id: 0, step: "1.0", title: "Order taking..." },
	{ id: 1, step: "2.0", title: "Stock is available..." },
	{ id: 2, step: "2.1", title: "Sorry, out of stock..." },
	{ id: 3, step: "3.0", title: "Hamburger is preparing with meatball..." },
	{ id: 4, step: "3.1.1", title: "Rare cooked meatball is prepared..." },
	{ id: 5, step: "3.1.2", title: "Medium cooked meatball is prepared..." },
	{ id: 6, step: "3.1.3", title: "Well cooked meatball is prepared..." },
	{ id: 7, step: "3.0", title: "Hamburger is preparing with chicken..." },
	{ id: 8, step: "3.2", title: "Hamburger is prepared..." },
	{ id: 9, step: "4.0", title: "Potatoes are frying..." },
	{ id: 10, step: "5.0", title: "Drink is prepared..." },
	{ id: 11, step: "6.0", title: "Read to service..." },
	{ id: 12, step: "7.0", title: "Enjoy your hamburger :)..." },
];
let myFridge = {
	// Stocks of fridge to preparing hamburger
	lettuce: 5,
	souce: 5,
	onion: 5,
	meatball: 5,
	chicken: 5,
	tomato: 5,
	bread: 5,
	potato: 5,
	coke: 5,
};

// An additional parameter to keep shop availablity
let isShopOpen = true;
// Meat type parameters
let MEAT = ["Meatball", "Chicken"];
// Cooking type parameters
let COOKING_TIME = ["rare", "medium", "well"];
// ORDER-1
let customerOrder1 = {
	meatType: MEAT[0],
	cookingTime: COOKING_TIME[1],
};
// ORDER-2
let customerOrder2 = {
	meatType: MEAT[1],
};

// Utility function for regular works
/**
 * @param  {} time timeout for promise, it takes miliseconds
 * @param  {} controller boolean for resolving promise
 * @param  {} resolveMessage resolve output message
 * @param  {} rejectMessage reject output message
 * @description The doThing function is returns a Promise. That return is depend on controller parameter resolves or rejects
 */
function doThing(time, controller, resolveMessage, rejectMessage) {
	return new Promise((resolve, reject) => {
		if (controller === true) {
			setTimeout(() => {
				resolve(console.log(resolveMessage.step, resolveMessage.title));
			}, time);
		} else if (controller === false) {
			setTimeout(() => {
				reject(console.log(rejectMessage.step, rejectMessage.title));
			}, time);
		} else {
			reject(console.error("controller is not boolean"));
		}
	});
}

/**
 * @param  {} stock stock of shop is an object
 * @param  {} steps an array of object for logging steps
 */
 function chekStock(stock, steps) {
	return new Promise((resolve, reject) => {
		// This step is using object methods -Object.values()- for return values of fridge object
		// then cheking every value to is available for making a hamburger;
		let stockStatus = Object.values(stock).every((item) => item > 0);
		if (stockStatus === true) {
			setTimeout(() => {
				resolve(console.log(steps[1].step, steps[1].title));
			}, 3000);
		} else {
			setTimeout(() => {
				reject(new Error(steps[2].step, steps[2].title));
			}, 3000);
		}
	});
}

// the function is checking for meat type takes two params an order and steps for logging
function checkMeatType(order, steps) {
	return new Promise(async (resolve, reject) => {
		if (order.meatType === "Meatball") {
			setTimeout(() => {
				resolve(console.log(steps[3].step, steps[3].title));
			}, 1000);
		} else if (order.meatType === "Chicken") {
			setTimeout(() => {
				resolve(console.log(steps[7].step, steps[7].title));
			}, 1000);
		} else {
			reject(new Error(`There is not kinda ${order.meatType}`));
		}
	});
}


// return a new promise also inside using checkMeatType function before cooking
function checkCookingTime(order, steps) {
	return new Promise(async (resolve, reject) => {
		switch (order.cookingTime) {
			case "rare":
				await checkMeatType(order, steps);
				setTimeout(() => {
					resolve(console.log(steps[4].step, steps[4].title));
				}, 2000);
				break;
			case "medium":
				await checkMeatType(order, steps);
				setTimeout(() => {
					resolve(console.log(steps[5].step, steps[5].title));
				}, 3000);
				break;
			case "well":
				await checkMeatType(order, steps);
				setTimeout(() => {
					resolve(console.log(steps[6].step, steps[6].title));
				}, 4000);
				break;
			default:
				reject(new Error("There no type of cooking time like that!"));
				break;
		}
	});
}


