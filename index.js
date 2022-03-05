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
