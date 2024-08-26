import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { LinkedList } from "./topic/LinkList";

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30
linkedList.print(); // Output: 5 -> 10 -> 30
linkedList.delete(20);
linkedList.removeFirst();

console.log(linkedList.contains(10), "contains"); // Output: true
console.log(linkedList.contains(50)); // Output: false
console.log(linkedList.indexOf(30)); //2
console.log(linkedList.size()); // 3
console.log(linkedList.toArray()); // [5, 10, 30]

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;
