export function countSheeps(list) {
    let sheepCount = 0;
    let wolfCount = 0;

    for (const value of list) {
        if (value === true) {
            sheepCount++;
        } else {
            wolfCount++;
        }
    }

    if (sheepCount > 0) {
        return `There are ${sheepCount} sheep in total`;
    } else {
        return "UPS!!! Wolfs eaten Sheeps";
    }
}

const list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
const list2 = [false, false, false];

console.log(countSheeps(list1)); 
console.log(countSheeps(list2));

