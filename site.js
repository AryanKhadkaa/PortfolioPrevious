
function theme(){
    x= document.body;
    x.classList.toggle("darkmode");
}


const bar = document.querySelector("#info-bar");
const pscroll = window.pageYOffset;

             console.log(pscroll)

window.onscroll= function() {
    const nscroll = window.pageYOffset;

                                console.log(nscroll);
if(nscroll > pscroll)
{                               console.log("working")
    bar.style.top = "-60px";
}
else{
    bar.style.top = "0px";
}
   pscroll=nscroll;
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





        
