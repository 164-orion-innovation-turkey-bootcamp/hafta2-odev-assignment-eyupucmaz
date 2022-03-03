interface ItemConfig {
  lettuce: number;
  souce: number;
  onion: number;
  meatball: number;
  chicken: number;
  bread: number;
  tomato: number;
  pateto: number;
  coke: number;
}

let hamItems: ItemConfig = {
  lettuce: 5,
  souce: 5,
  onion: 5,
  meatball: 5,
  chicken: 5,
  bread: 5,
  tomato: 5,
  pateto: 5,
  coke: 5,
}

// const makeAPromise = (item:string,time:number)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(item);
//     },time);
//   });
// }

// INPUTS 
let orderObj = {
  isChicken: false,
  isMeatball: false,
  isLettuce: false,
  isTomato: false,
  isOnion: false,
  isSouce: false,
  isPateto: false,
  isBread: false,
  isCoke: false,
}
const takeAnOrder = (time: number, items: ItemConfig, work: Function) => {
  return new Promise((resolve, reject) => {
    if (Object.values(items).every((item) => item > 0)) {
      setTimeout(() => {
        resolve(work(items));
      }, time);
    } else {
      reject('Not Enough Items');
    }
  });
}

takeAnOrder(1000, hamItems, () => { console.log('Order Placed') })