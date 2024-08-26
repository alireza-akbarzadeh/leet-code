const map = new Map();

map.set(1, "Mosh");
map.set(2, "hamedani");
map.set(3, "Mary");
map.set(4, "Marian");
map.set(null, null);
map.delete(null);
const value = map.get(3);

const key = map.keys();
const valuse = map.values();
const entries = map.entries();
const size = map.size;

console.log(map.has(3));
console.log({ size });
console.log({ key });
console.log({ value });
console.log({ entries });
console.log({ valuse: [...map.keys()] });
console.log({ map });

for (const [key, value] of map.entries()) {
  console.log(`key=${key} value=${value}`);
}

Array.prototype.myMap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};
const numbers = [1, 2, 3, 4];
const doubled = numbers.myMap((number) => number * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
