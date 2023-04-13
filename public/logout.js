let nav_bar = document.getElementById('nav-bar');
let sideNav = document.getElementById('sideNav')
let menu = document.getElementById('menu-bar')

 sideNav.style.right="-250px";   


nav_bar.onclick=function(){
    if(sideNav.style.right == "-250px")
    {
        sideNav.style.right = "0px";

    }
    else{
        sideNav.style.right="-250px"
    }


    
}



