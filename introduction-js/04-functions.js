function sum (a, b){
    return a+b;
}
console.log(sum (10, 10));


function product(a, b){
    return a*b;
}

console.log(product(12, 12));

const bigProduct = product(1234, 53459);
console.log(bigProduct);

setTimeout(function () {
    console.log("eu sou do rock!!");
}, 1000);

setTimeout(() => console.log("eu sou do rock!!"), 1000)
