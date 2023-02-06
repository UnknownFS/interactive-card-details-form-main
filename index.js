const conCon = document.getElementById("confirm");
const input = document.querySelector(".input");
const confirmBtn = document.getElementById("confirm-btn");
const userName = document.getElementById("userName");
const userCardNum = document.getElementById("userCardNum");
const expMonth = document.getElementById("expMonth");
const expYear = document.getElementById("expYear");
const userCvc = document.getElementById("cvc");

const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardMonthExp = document.getElementById("card-expire").querySelectorAll("span")[0];
const cardYearExp = document.getElementById("card-expire").querySelectorAll("span")[1];
const cardCvc = document.getElementById("card-code");

let fields = document.querySelectorAll("input");

conCon.style.display = "none";

userName.addEventListener("blur", e => {
    cardName.innerHTML = e.target.value;
    checkError(e);
});

userCardNum.addEventListener("blur", e => {
    cardNumber.innerHTML = e.target.value;
    checkError(e);
});

expMonth.addEventListener("blur", e => {
    cardMonthExp.innerHTML = e.target.value;
    checkError(e);
});

expYear.addEventListener("blur", e => {
    cardYearExp.innerHTML = e.target.value;
    checkError(e);
});

userCvc.addEventListener("blur", e => {
    cardCvc.innerHTML = e.target.value;
    checkError(e);
});

function checkError(e) {
    if(e.target.getAttribute("placeholder") == 'MM' || e.target.getAttribute("placeholder") == 'YY') {
        if(e.target.value == "" || e.target.value == null) {
            e.target.style.border = "2.5px solid var(--Red)";
            e.target.parentElement.parentElement.querySelector("span").textContent = "Can't be blank";
        }
        else {
            e.target.style.border = "2.5px solid var(--Lightgrayishviolet)";
            e.target.parentElement.parentElement.querySelector("span").textContent = null;
        }
    }
    if(e.target.value == "" || e.target.value == null) {
        e.target.style.border = "2.5px solid var(--Red)";
        e.target.parentElement.querySelector("span").textContent = "Can't be blank";
    }
    else {
        e.target.style.border = "2.5px solid var(--Lightgrayishviolet)";
        e.target.parentElement.querySelector("span").textContent = null;
    }
}

confirmBtn.addEventListener("click", e => { 
    let thisUserCardNum = removeSpaces(userCardNum.value);
    console.log(thisUserCardNum);
    
    if(userName.value === '' || userName.value === null) {
        errorDisplay(userName.value, userName);
    } if (userCardNum.value === '' || cardName.value === null || (thisUserCardNum%1) != 0) {
        errorDisplay(userCardNum.value, userCardNum);
    } if((expMonth.value) % 1 != 0 || expMonth.value == "") {
        expFormat(expMonth);
    }
    if ((expYear.value) % 1 != 0 || expYear.value == "") {
       expFormat(expYear);
    } if (((userCvc.value) % 1 != 0 || userCvc.value == "") ) {
        errorDisplay(userCvc.value, userCvc);
    }
    else {
        input.style.display = "none";
        conCon.style.display = "inline-flex";
    }
});

function removeSpaces(value) {
    originalText = value;
    removedSpacesText = [...originalText].reduce((accum, char)=> (char===" ") ? accum : accum+char, '') ;
    return removedSpacesText;
}

function expFormat(check) {
    check.style.border = "2.5px solid var(--Red)";
    if(check.value === '') {
        check.parentElement.parentElement.querySelector("span").textContent = "Can't be blank";
    } else if (((check.value)%1) != 0) {
        check.parentElement.parentElement.querySelector("span").innerHTML = "Wrong format, numbers only";
    }
}

function errorDisplay(checkVal, disVal) {
    disVal.style.border = "2.5px solid var(--Red)";
    if(checkVal === '') {
        disVal.parentElement.querySelector("span").textContent = "Can't be blank";
    } else if ((checkVal%1) != 0) {
        disVal.parentElement.querySelector("span").innerHTML = "Wrong format, numbers only";
    }
}