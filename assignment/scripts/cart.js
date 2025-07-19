console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = []; 
const maxItems = 5;

/* --> code before stretch goals
function addItem(item){
    console.log(`in addItem`, item);
basket.push(item);
return true;
}
*/

function addItem(item){
    console.log(`in addItem`, item);
  if (isFull() === false) {
    basket.push(item);
    return true;  
} else {
    console.log(`basket is full`);
    return false;
}
}

console.log(`Basket is ${basket}`);
console.log(`Adding bread`, addItem(`bread`));
console.log(`basket is now ${basket}`);

function listItems(){
    console.log(`in listItem`);
for(let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}
}

addItem(`apple`);
addItem(`banana`);
addItem(`coffee`);
listItems();
console.log(`basket is now ${basket}`);

function empty(){
    console.log(`in empty`);
    basket.length = 0;
} 
console.log(`Basket before emptying: ${basket}`);
empty();
console.log(`Basket after emptying: ${basket}`);


// addItem(`peach`);
// addItem(`pear`);
// addItem(`tea`);x
// listItems();
// console.log(`basket is now ${basket}`);

function isFull(){
    console.log(`in isFull`);
    if (basket.length >=maxItems){
        return true;
    } else{
        return false;
    }
}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
