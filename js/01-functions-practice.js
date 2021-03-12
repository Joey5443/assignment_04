//STEP 1
function halfNumber(num) {
    let half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}
halfNumber(5);
//STEP 2
function squareNumber(num) {
    let squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}
squareNumber(3);
//STEP 3
function percentOf(num1, num2) {
    let percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

percentOf(2, 4);
//STEP 4
function findModulus(num1, num2){
    let modulus = (num1%num2);
    console.log(modulus + ' is the modulus of ' + num1 + ' and ' + num2);
    return modulus;
}
findModulus(10, 4);
//STEP 5
function sum(numString){
    let a = numString.split(',');
    let add = 0
    for(let i = 0; i < a.length; i++){
       var num = parseInt(a[i]);
       add = add + num;
    }
    console.log(add);
    return add ;
}
sum(window.prompt("Enter the numbers you want to add."));