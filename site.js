
function theme(){
    x= document.body;
    x.classList.toggle("darkmode");
}


const bar = document.getElementById("info-bar");
var pscroll = window.pageYOffset;

             console.log(pscroll);

window.onscroll= function() {
    var nscroll = window.pageYOffset;

                                console.log(nscroll);
if(pscroll > nscroll)
{                               //console.log("working")
    bar.style.top = "0px";
}
else{
    bar.style.top = "-60px";
}
   pscroll = nscroll;
}


function display(){
    document.getElementById('sidebar').classList.toggle('active');
}

/*
 function empty(){
    document.getElementById("tbname").value="";
    document.getElementById("t2").value="";
    document.getElementById("t3").value="";
    document.getElementById("t4").value="";

}
*/





        
