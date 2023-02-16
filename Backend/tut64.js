const fs= require("fs");
let text=fs.readFileSync("NODE-JS.txt","utf-8");
text = text.replace("javascript","Abhi");

console.log("the content of the file is");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("JS.txt",text);
