
let kaban = new Map();


kaban.set("kaban 1: ", "color white");
kaban.set("kaban 2: ", "color blue");
kaban.set("kaban 3: ", "color red");
kaban.set("kaban 4: ", "color green");
kaban.set("kaban 5: ", "color brown");


for (let kabanNum of kaban.keys()) {
    console.log(kabanNum + " - " + kaban.get(kabanNum));
}