let arr = [1, 2, 3, 4, 5];

x = typeof (arr[0]);
if (arr.every(element => typeof (element) == x)) {
    console.log(true);
} else {
    console.log(false);
}