const elem = document.querySelectorAll("nav>ul>li>label"); /*doument는 html을 뜻함*/
elem.forEach((label)=>{
    label.addEventListener("click",()=>{
        document.getElementById("check-icon").checked=false;
    });
});