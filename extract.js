const fs = require("fs");

const specMD = fs.readFileSync("./specification.md", "utf8");
const reg = /\* method: '([A-Za-z1-9/]+)'/g;
const srg = "* method: 'hello/wld' world * method: 'hello/wee' world ";
const list = specMD.match(reg);
const list2 = list.map(datum => datum.slice(11, -1));
console.log(list2);
const list3 = list2.reduce((sum, n)=>`${sum}* ${n}\n`);
console.log(list3);
