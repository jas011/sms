let daterc = document.getElementById("search");
function cdate(date){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date(date);
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}


function edate(dater){
    const expDate = cdate(dater);
    document.getElementById("expdate ").innerHTML= expDate;
}

 function enterv(inval){
    let formattedNumbers = inval.split('\n').map(number => "+91" + number + ",").join('\n');
    let link = document.querySelector("#sms").href = `sms:${formattedNumbers}`
 }      
    
function copy(){
    console.log(daterc.value)
    if(daterc.value){
    let content = document.getElementById("vale");
    navigator.clipboard.writeText(content.innerText);
}
}