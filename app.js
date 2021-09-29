var billAmt = document.querySelector("#bill-amount");
var cashAmt = document.querySelector("#cash-amount");
 var checkBtn = document.querySelector("#check-button");
 var message = document.querySelector("#error-message");
 var changeToReturn = document.querySelectorAll(".list-of-notes");

var notes = [2000,500,100,20,10,5,1];

checkBtn.addEventListener("click", function validateAmount() {
    hideMsg();
    if(billAmt.value > 0){
        if(cashAmt.value>billAmt.value){
            var returnAmt= cashAmt.value-billAmt.value;
           
            calculateChangeAmt(returnAmt);

        }else{
            showMsg("more amount required for bill");
        }
    }else{
        showMsg("Invalid amount");
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
