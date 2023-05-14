const username="pradeep singh";




const array = [
  {
    
    "name": "Alok Tamrakar",
    "age":["19","Male"],
    "Address":"Mangawan Basti Dist.Rewa",
    "Mobile":"9644905810",
    "Email":"aloktamrakar2@gmail.com",
    "summary":["1100","A","100/80vh","95","160 CM","70 KG"],
  
    "prescription": " Hello alok hope you are fine your health is good make sure to take the medicine time to time and do not not forget any thing",
    "diets":["milk","bread","sprouts"],
    "images":["milk.jpg","sprouts.jpg","bread.jpg"],
  },
  {
    "name": "Avinash Aggrawal",
    "age":["19","Male"],
    "Address":"Mangawan Basti Dist.Rewa",
    "Mobile":"9644905810",
    "Email":"aloktamrakar2@gmail.com",
    "summary":["100","A","120/75","95","160 CM","70 KG"],
    "prescription": " Hello avinash hope you are fine your health is good make sure to take the medicine time to time and do not not forget any thing",
    "diets":["milk","bread","sprouts"],
    "images":["milk.jpg","sprouts.jpg","bread.jpg"],
  },
  {
    "name": "pradeep singh",
    "age":["20","Male"],
    "Address":"Mangawan Basti Dist.Rewa",
    "Mobile":"9644905810",
    "Email":"aloktamrakar2@gmail.com",
    "summary":["80","A","100/80vh","95" ,"160 CM","70 KG"],
    "prescription": " Hello alok hope you are fine your health is good make sure to take the medicine time to time and do not not forget any thing",
    "diets":["milk","bread","sprouts"],
    "images":["milk.jpg","sprouts.jpg","bread.jpg"],
  },
    {
    "name": "veerbahudar sen",
    "age":["19","Male"],
    "Address":"Mangawan Basti Dist.Rewa",
    "Mobile":"9644905810",
    "Email":"aloktamrakar2@gmail.com",
    "summary":["100","A","100/80vh","95" ,"160 CM","70 KG"],
    "prescription": " Hello veerbahadur hope you are fine your health is good make sure to take the medicine time to time and do not not forget any thing",
      "diets":["milk","bread","sprouts"],
      "images":["milk.jpg","sprouts.jpg","bread.jpg"],
  },
  {
    "name": "Ankita Gupta",
    "age":["19","Female"],
    "Address":"Mangawan Basti Dist.Rewa",
    "Mobile":"9644905810",
    "Email":"aloktamrakar2@gmail.com",
    "summary":["100","A","100/80vh","95" ,"160 CM","70 KG"],
    "prescription": " Hello veerbahadur hope you are fine your health is good make sure to take the medicine time to time and do not not forget any thing",
      "diets":["milk","bread","sprouts"],
      "images":["milk.jpg","sprouts.jpg","bread.jpg"],
  },
  {
    "name": "Seeta Soni",
    "age":["19","Female"],
    "Address":"Mangawan Basti Dist.Rewa",
    "Mobile":"9644905810",
    "Email":"aloktamrakar2@gmail.com",
    "summary":["100","A","100/80vh","95" ,"160 CM","70 KG"],
    "prescription": " Hello veerbahadur hope you are fine your health is good make sure to take the medicine time to time and do not not forget any thing",
      "diets":["milk","bread","sprouts"],
      "images":["milk.jpg","sprouts.jpg","bread.jpg"],
  },

];
//All the function related to the  
var result=array.filter(obj=> obj.name == username);
document.getElementById("name").innerHTML=result[0].name;
document.getElementById("age").innerHTML= "Age : "+ result[0].age[0] +  " " +" "+  (result[0].age[1]);
document.getElementById("address").innerHTML=result[0].Address;
document.getElementById("mobile").innerHTML=result[0].Mobile;
document.getElementById("email").innerHTML=result[0].Email;

document.getElementById("sugar").innerHTML=result[0].summary[0];
document.getElementById("Blood-group").innerHTML=result[0].summary[1];
document.getElementById("BP").innerHTML=result[0].summary[2];
document.getElementById("oxygen-level").innerHTML=  result[0].summary[3];
document.getElementById("height").innerHTML=result[0].summary[4];
document.getElementById("weight").innerHTML=result[0].summary[5];
document.getElementById("oxygen-level").innerHTML=result[0].summary[3];


document.getElementById('prescription').innerHTML=result[0].prescription;
const milk =(result[0].images[0]);
console.log(milk)
document.getElementById('image1').src='Images/'+ milk;
console.log((result[0].prescription));
console.log((result[0].diets));
console.log((result[0].images));


