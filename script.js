alert("Open this project on a desktop and resize the window to see the animation")
var click=0;
    var navbar=document.getElementById("navbar");
    var nav=document.getElementById("navbutton");
    nav.addEventListener("click",hideshow); 
    function hideshow(){
        if(click%2==0){
        navbar.classList.remove("hide");
        navbar.classList.add("show");
        }
        else{navbar.classList.remove("show");
        navbar.classList.add("hide");}
        click++;}
