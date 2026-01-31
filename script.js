// SLIDER
let images=[
"https://images.unsplash.com/photo-1568605114967-8130f3a36994",
"https://images.unsplash.com/photo-1570129477492-45c003edd2be",
"https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
];

let i=0;
setInterval(()=>{
i=(i+1)%images.length;
document.getElementById("slideImg").src=images[i];
},3000);


// PROPERTY DETAILS
function openDetail(){
window.location="details.html";
}


// BOOKING
function bookProperty(){
let n=document.getElementById("name").value;
let p=document.getElementById("phone").value;

if(n==""||p==""){
alert("Fill all fields");
return;
}

alert("Property Booked!");
}


// PAYMENT
function payLater(){
alert("Pay when visiting office.");
}

function payOnline(){
alert("Online payment coming soon!");
}


// CONTACT
function sendMessage(){
let n=document.getElementById("cname").value;
let p=document.getElementById("cphone").value;
let m=document.getElementById("cmsg").value;

if(n==""||p==""||m==""){
alert("Fill all fields");
return;
}

alert("Message Sent!");
}


// FILTER
function filterProperty(){
let v=document.getElementById("priceFilter").value;
let cards=document.querySelectorAll(".card");

cards.forEach(card=>{
if(v=="all"){
card.style.display="block";
}
else if(card.classList.contains(v)){
card.style.display="block";
}
else{
card.style.display="none";
}
});
}


// ADMIN LOGIN
function adminLogin(){
let u=prompt("Username:");
let p=prompt("Password:");

if(u=="admin" && p=="1234"){
alert("Admin Login Success!");
}
else{
alert("Wrong Login!");
}
}


// SCROLL
function scrollToProperty(){
document.getElementById("properties").scrollIntoView();
}

