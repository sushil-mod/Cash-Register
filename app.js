var billAmt = document.querySelector("#bill-amount");
var cashAmt = document.querySelector("#cash-amount");
 var checkBtn = document.querySelector("#check-button");
 var message = document.querySelector("#error-message");

checkBtn.addEventListener("click", function validateAmount() {
    hideMsg();
    if(billAmt.value > 0){
        if(cashAmt.value>billAmt.value){
            var returnAmt= cashAmt-billAmt;
            calculateChangeAmt(returnAmt);

        }else{
            showMsg("more amount required for bill");
        }
    }else{
        showMsg("Invalid amount");
    }
});
function hideMsg(){
message.style.display="none";
}
function showMsg(msg){
    message.style.display = "block";
    message.innerText = msg
}
function calculateChangeAmt(){
    
}