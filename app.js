var billAmt = document.querySelector("#bill-amount");
var cashAmt = document.querySelector("#cash-amount");
 var checkBtn = document.querySelector("#check-button");
 var message = document.querySelector("#error-message");
 var changeToReturn = document.querySelectorAll(".list-of-notes");
var nextBtn = document.querySelector("#next-button");


var showCash = document.querySelector(".show-cash");
var showchange = document.querySelector(".show-change");



var notes = [2000,500,100,20,10,5,1];


nextBtn.addEventListener('click', nextBtnHandler)


function nextBtnHandler (){
    if (billAmt.value > 0) {
       nextBtn.style.display="none";
       showCash.style.display="block";
        
        hideMsg();
    }else {
        showMsg("enter valid bill amount");
    }

}



checkBtn.addEventListener("click", function validateAmount() {
    
    if(cashAmt.value > 0){
        if(Number(cashAmt.value)> Number(billAmt.value)){
            var returnAmt= cashAmt.value-billAmt.value;
           showchange.style.display="block";
           hideMsg();
            calculateChangeAmt(returnAmt);

        }else{
            showMsg("more amount required for bill");
        }
    }else{
        showMsg("Invalid cash amount");
    }
});

function calculateChangeAmt(returnAmt){

    for(let i = 0 ;i < notes.length;i++){
        var NotesToReturn = Math.trunc(returnAmt / notes[i]);
        returnAmt = returnAmt % notes[i];

        changeToReturn[i].innerText=NotesToReturn;
    }
}
function hideMsg(){
message.style.display="none";
}
function showMsg(msg){
    message.style.display = "block";
    message.innerText = msg;
}
