import _ from "lodash";
import log from "./print";
import "./style.css";

const element = document.createElement("div");

// Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
element.innerHTML = _.join(["Hello", "webpack"], " ");
element.onclick = log;
console.log(111);

document.body.appendChild(element);
