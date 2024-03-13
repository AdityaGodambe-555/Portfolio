var icon =document.getElementById("theme")

icon.onclick = ()=>{
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        icon.src="assests/images/sun.png";
        social=document.querySelectorAll(".social a")
        Array.from(social).forEach((a)=>{
            a.style.filter='invert(100%)'
        })
    }else{
        icon.src="assests/images/moon.png";
    }
}