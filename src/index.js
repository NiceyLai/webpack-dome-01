import x from "./x.js";
import img from "./assets/1.jpg";

const div = document.getElementById("app1");
console.log(div);
div.innerHTML = `
<img src="${img}">`;

const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {
      console.log("失败了");
    }
  );
};

div.appendChild(button);