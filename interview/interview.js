// green apple
export const findFirstRepeatedValue = (str) => {
  const setChar = new Set();
  for (const ch of str) {
    if (setChar.has(ch)) return ch;
    setChar.add(ch);
  }
  return null;
};

const findString = "a green apple";

export function findFirstNoneRepeatingChar(str) {
  const map = new Map();

  for (const ch of str) {
    const count = map.has(ch) ? map.get(ch) : 0;
    map.set(ch, count + 1);
  }
  for (const ch of str) {
    if (map.get(ch) == 1) {
      return ch;
    }
  }
  return null;
}

export class HashMap {
  constructor() {
    this.map = {};
  }
  hash(key) {
    let hashValue = 0;
    const stringKey = String(key);
    for (let index = 0; index < stringKey.length; index++) {
      const char = stringKey.charCodeAt(index);
      hashValue = (hashValue << 5) - hashValue + char;
      hashValue |= 0; // Convert to 32-bit integer
    }
    return hashValue;
  }
  set(key, value) {
    const hashKey = this.hash(key);
    this.map[hashKey] = value;
  }
  get(key) {
    const hashKey = this.hash(key);
    return this.map[hashKey];
  }
  // Check if a key exists in the HashMap
  has(key) {
    const hashKey = this.hash(key);
    return this.map.hasOwnProperty(hashKey);
  }
  // Remove a key-value pair from the HashMap
  delete(key) {
    const hashKey = this.hash(key);
    if (this.map.hasOwnProperty(hashKey)) {
      delete this.map[hashKey];
      return true;
    }
    return false;
  }
  // Get all keys in the HashMap
  keys() {
    return Object.keys(this.map).map((hashKey) => parseInt(hashKey, 10));
  }

  // Get all values in the HashMap
  values() {
    return Object.values(this.map);
  }
  // Clear the entire HashMap
  clear() {
    this.map = {};
  }
}

export class Array2 {
  constructor() {
    this.list = [];
  }
  set(item) {
    // complexity O(n)
    const newlist = new Array(this.list.length + 1);
    for (let i = 0; i < this.list.length; i++) {
      newlist[i] = this.list[i];
    }
    newlist[this.list.length] = item;
    this.list = newlist;
  }

  indexOf(item) {
    // complexity O(1)
    for (let index = 0; index < this.list.length; index++)
      if (this.list[index] === item) return index;
    return -1;
  }
  get() {
    return this.list;
  }
  size() {
    return this.list.length;
  }
  removeAt(index) {
    // complexity O(n)
    if (index < 0 || index >= this.list.length) {
      throw new Error("Index out of bounds");
    }
    const removedItem = this.list[index];
    const newList = new Array(this.list.length - 1);
    for (let i = 0, j = 0; i < this.list.length; i++) {
      if (i !== index) {
        newList[j] = this.list[i];
        j++;
      }
    }
    this.list = newList;
    return removedItem;
  }
  clear() {
    this.list = [];
  }
}
