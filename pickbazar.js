const addButton = document.querySelector(".add");
var count=0;

function getAmount18() {
    const costValue = document.getElementById("cost18");
    const totalAmount = document.querySelector(".total");
    var finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;

}

// function 

function myFunc1(){
    count++;
    addButton.innerHTML = count;

    if(count === 0){
        addButton.innerHTML = "Add";
    }
    getAmount18();
}

function myFunc2(){
    addButton.innerHTML = count;
    count--;
    if(count === 0){
        addButton.innerHTML = "Add";
    }
}

function myFunc3(){
    count++;
    addButton.innerHTML = count;

    if(count === 0){
        addButton.innerHTML = "Add";
    }
    getAmount17();
}

function myFunc4(){
    addButton.innerHTML = count;
    count--;
    if(count === 0){
        addButton.innerHTML = "Add";
    }
}


function getAmount() {
    const costValue = document.getElementById("cost");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}

function getAmount1() {
    const costValue = document.getElementById("cost1");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount2() {
    const costValue = document.getElementById("cost2");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount3() {
    const costValue = document.getElementById("cost3");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount4() {
    const costValue = document.getElementById("cost4");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount5() {
    const costValue = document.getElementById("cost5");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount6() {
    const costValue = document.getElementById("cost6");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount7() {
    const costValue = document.getElementById("cost7");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount8() {
    const costValue = document.getElementById("cost8");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount9() {
    const costValue = document.getElementById("cost9");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount10() {
    const costValue = document.getElementById("cost10");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount11() {
    const costValue = document.getElementById("cost11");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount12() { //for 7th one
    const costValue = document.getElementById("cost12");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    console.log(finalAmount);
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount13() {
    const costValue = document.getElementById("cost13");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount14() {
    const costValue = document.getElementById("cost14");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount15() {
    const costValue = document.getElementById("cost15");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount16() {
    const costValue = document.getElementById("cost16");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}
function getAmount17() {
    const costValue = document.getElementById("cost17");
    const totalAmount = document.querySelector(".total");
    const finalAmount = parseFloat(costValue.getAttribute("value")) + parseFloat(totalAmount.getAttribute("value"));
    totalAmount.innerHTML = `$ ${finalAmount}`;
}


// console.log(costValue);
