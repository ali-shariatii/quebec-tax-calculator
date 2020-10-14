console.log("main.js loaded");

jQuery(document).ready(function(){
    console.log("jQuery ready");    
})

var amount = document.getElementById("amount")
var total = document.getElementById("total")
var buttonSoundEffect = document.getElementById("buttonSoundEffect");

function clickButton()
{
  total.innerHTML = "$" + ( calculateAmount(amount.value) * 0.14975 ).toFixed(2);
  gst.innerHTML = "$" + ( calculateAmount(amount.value) * 0.05 ).toFixed(2);
  qst.innerHTML = "$" + ( calculateAmount(amount.value) * 0.09975 ).toFixed(2);
  buttonSoundEffect.play();
}
  
function calculateAmount(number)
{
    return number;
}




