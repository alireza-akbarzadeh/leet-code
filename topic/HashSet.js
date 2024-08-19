const hashSet = new Set();

const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 5];
for (const number of numbers) {
  hashSet.add(number);
}
const size = hashSet.size;
hashSet.delete(2);

console.log(hashSet);
console.log({ size });
console.log({ values: [...hashSet.keys()] });
