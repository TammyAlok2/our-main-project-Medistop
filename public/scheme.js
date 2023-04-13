const schemes =[
    {
    "name":"Pradhan Mantri Jan Arogya Yojana",
    "Elibility":"Central",
    "website":"https://mera.pmjay.gov.in",
    },
    {
        "name":"Ayushman Yojana",
        "Elibility":"Central",
        "website":"https://ayushmanbharat.mp.gov.in/",
    },
    {
        "name":"Pradhan Mantri Surakhsha Yojana",
        "Elibility":"Central",
        "website":"https://nationalinsurance.nic.co.in/en/about-us/pradhan-mantri-suraksha-bima-yojana",
    },
    {
        "name":"Maharastra Government Health Yojana",
        "Elibility":"Maharastra",
        "website":"https://www.jeevandayee.gov.in/",
    },
    {
        "name":"Chattisgarh Government Health Yojana",
        "Elibility":"Chattisgarh",
        "website":"https://dkbssy.cg.nic.in/",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"MP",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"UP",
        "website":"https://upnrhm.gov.in/NUHM/schemes",
    },
    {
        "name":"Bihar Government Health Yojana",
        "Elibility":"Bihar",
        "website":"https://biswass.bihar.gov.in/",
    },
    {
        "name":"Central Government Health Yojana",
        "Elibility":"Central",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Delhi Government Health Yojana",
        "Elibility":"Delhi",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },
    {
        "name":"Jharkhand Government Health Yojana",
        "Elibility":"Jharkhand",
        "website":"https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml",
    },

]


// navbar 
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




//function for the fetching the data in the table 
buildTable(schemes)
function buildTable(data){
    const table =document.getElementById('mytable')
    for(let i=0;i<data.length;i++){
        const row = 
        `<tr>
        <td> ${data[i].name}</td>
        <td> ${data[i].Elibility}</td>
        <td> <a href=${data[i].website} > ${data[i].website} </a></td>
</tr>`
table.innerHTML +=row;
    }
}
console.log(website)
console.log(schemes.name)